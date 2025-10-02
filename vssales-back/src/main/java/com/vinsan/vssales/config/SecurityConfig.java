package com.vinsan.vssales.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private Environment env;
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // libera todos os endpoints
                        .allowedOrigins("http://localhost:3000") // libera só o teu frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        boolean isTestProfile  = Arrays.asList(env.getActiveProfiles()).contains("test");
        boolean testApp = true;
        if(testApp){//if(isTestProfile){
            http.csrf(csrf -> csrf.disable());
            http.headers(
                    h->h
                            .frameOptions(HeadersConfigurer.FrameOptionsConfig::disable)
            );
            http.authorizeHttpRequests(authz -> authz
                            .anyRequest().permitAll());
        } else {

            http
                    .headers(headers -> headers
                                    .contentTypeOptions(contentType -> {})
                    )
                    .authorizeHttpRequests(authz -> authz
                            .requestMatchers("/public/**", "/css/**", "/js/**", "/images/**").permitAll()
                            .requestMatchers("/login", "/health", "/actuator/health").permitAll()
                            .requestMatchers("/api/admin/**").hasRole("ADMIN")
                            .requestMatchers("/api/**").authenticated()
                            .anyRequest().authenticated()
                    )
                    .formLogin(form -> form
                            .loginPage("/login")    // custom login page
                            .defaultSuccessUrl("/", true)
                            .permitAll()
                    )
                    .logout(logout -> logout
                            .logoutSuccessUrl("/login?logout")
                            .permitAll()
                    );
        }

        return http.build();
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}