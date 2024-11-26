package com.onesandzeros.chat;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/chat")
public class ChatController {
    private final ChatService chatService;

    @GetMapping
    public Flux<String> getChat(
            @RequestParam String message) {
        log.info("Message send: {}", message);
        return chatService.chat(message);
    }
}
