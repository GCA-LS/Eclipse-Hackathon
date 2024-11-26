package com.onesandzeros.config;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

    @Bean
    public ChatClient chatClient(ChatClient.Builder chartChartBuilder) {
        final var defaultSystem = """
                
                """;

        return chartChartBuilder.defaultSystem(defaultSystem)
                .build();
    }
}
