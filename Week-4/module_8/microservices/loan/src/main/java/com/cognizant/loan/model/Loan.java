package com.cognizant.loan.model;

public record Loan(String number, String type, double loan, double emi, int tenure) {}
