package com.onesandzeros.chat;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatClient chatClient;

    public Flux<String> chat(String message) {
        return chatClient.prompt()
                .user(formatUserMessage(message))
                .stream()
                .content();
    }

    public String formatUserMessage(String message) {
        return """
                Answer the question: %s.
                
                And follow this rules when responding to the above question:
                - your answer should be short and effective using natural human language.
                - answer in a language the question is
                """.formatted(message);
    }
}
