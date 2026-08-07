package com.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
public class LoginResponse {
	private boolean success;

    private String message;

    private Long userId;

    private String role;

	public LoginResponse() {
		super();
	}

	public LoginResponse(boolean success, String message, Long userId, String role) {
		super();
		this.success = success;
		this.message = message;
		this.userId = userId;
		this.role = role;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
    
}
