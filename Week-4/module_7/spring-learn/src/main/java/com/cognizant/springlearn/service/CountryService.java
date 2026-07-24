package com.cognizant.springlearn.service;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    private final List<Country> countries;

    @SuppressWarnings("unchecked")
    public CountryService() {
        LOGGER.info("Initializing CountryService and loading country.xml context");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        this.countries = (List<Country>) context.getBean("countries", List.class);
    }

    public Country getCountry(String code) throws CountryNotFoundException {
        LOGGER.info("Searching for country code: {}", code);
        return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> {
                    LOGGER.warn("Country code {} not found", code);
                    return new CountryNotFoundException("Country not found");
                });
    }
}
