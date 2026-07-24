package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.exception.CountryNotFoundException;
import com.cognizant.springlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CountryController {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    private final List<Country> countries;

    @Autowired
    private CountryService countryService;

    @SuppressWarnings("unchecked")
    public CountryController() {
        LOGGER.info("Initializing CountryController and loading country.xml context");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        this.countries = (List<Country>) context.getBean("countries", List.class);
    }

    @GetMapping("/countries")
    public List<Country> getCountries() {
        LOGGER.info("GET /countries endpoint called");
        return countries;
    }

    @RequestMapping(value = "/country", method = RequestMethod.GET)
    public Country getCountryIndia() {
        LOGGER.info("GET /country (getCountryIndia) endpoint called");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        return context.getBean("country", Country.class);
    }

    @GetMapping({"/countries/{code}", "/country/{code}"})
    public Country getCountry(@PathVariable String code) throws CountryNotFoundException {
        LOGGER.info("GET /countries/{} endpoint called", code);
        return countryService.getCountry(code);
    }
}
