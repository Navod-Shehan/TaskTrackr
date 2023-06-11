package com.coderscamps.AssignmentSubmissionApp.service;

import com.coderscamps.AssignmentSubmissionApp.entity.User;

import com.coderscamps.AssignmentSubmissionApp.repository.UserRepository;
import com.coderscamps.AssignmentSubmissionApp.util.CustomPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class userDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional <User> userOptional = userRepository.findByUsername(username);

        return userOptional.orElseThrow(() -> new UsernameNotFoundException("Invalid Credentials"));
    }
}
