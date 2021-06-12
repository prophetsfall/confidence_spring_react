package com.temporalmechanic.confidence.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

  @GetMapping(value = {"/confidence"})
  public String forward() {
    return "forward:/";
  }
}
