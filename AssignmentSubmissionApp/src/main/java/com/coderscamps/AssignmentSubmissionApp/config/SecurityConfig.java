package com.coderscamps.AssignmentSubmissionApp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig implements SecurityFilterChain {
    protected void configurer()
}
