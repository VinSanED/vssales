package com.vinsan.vssales.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.web.SecurityFilterChain;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private Environment env;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        boolean isTestProfile  = Arrays.asList(env.getActiveProfiles()).contains("test");

        if(isTestProfile){
            http.csrf(csrf -> csrf.disable());
            http.headers(
                    h->h
                            .frameOptions(HeadersConfigurer.FrameOptionsConfig::disable)
            );
            http.authorizeHttpRequests(authz -> authz
                            .anyRequest().permitAll());
        } else {
            http
                    .authorizeHttpRequests(authz -> authz
                            .requestMatchers("/public/**").permitAll()
                            .requestMatchers("/api/**").authenticated()
                            .anyRequest().authenticated()
                    )
                    .formLogin(form -> form
                            .loginPage("/login")
                            .permitAll()
                    )
                    .logout(logout -> logout
                            .logoutSuccessUrl("/login?logout")
                            .permitAll()
                    )
            ;
        }

        return http.build();
    }
}