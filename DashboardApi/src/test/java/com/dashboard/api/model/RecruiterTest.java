package com.dashboard.api.model;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;


@RunWith(SpringRunner.class)
@DataJpaTest
public class RecruiterTest {

    private Recruiter recruiter;
    private Validator validator;

    @Before
    public void setUp(){
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
        recruiter = new Recruiter(1,"Rohit","Saidugari","Rohith.saidugari@outlook.com", "4083735910");
    }

    @Test
    public void testValidRecruiter(){
        Set<ConstraintViolation<Recruiter>> violations = validator.validate(recruiter);
        assertTrue(violations.isEmpty());

    }

    @Test
    public void testInvalidFirstName(){
        recruiter.setFirstName(null);
        Set<ConstraintViolation<Recruiter>> violations = validator.validate(recruiter);
        assertEquals("First Name is Mandatory", violations.iterator().next().getMessage());
    }

    @Test
    public void testInvalidLastName(){
        recruiter.setLastName(null);
        Set<ConstraintViolation<Recruiter>> violations = validator.validate(recruiter);
        assertEquals("Last Name is Required", violations.iterator().next().getMessage());
    }

    @Test
    public void testNullPhoneNumber(){
        recruiter.setPhoneNumber(null);
        Set<ConstraintViolation<Recruiter>> violations = validator.validate(recruiter);
        assertEquals("Phone Number is Required", violations.iterator().next().getMessage());
    }

    @Test
    public void testInvalidPhoneNumber(){
        recruiter.setPhoneNumber("Invalid");
        Set<ConstraintViolation<Recruiter>> violations = validator.validate(recruiter);
        assertEquals("Phone Number is Invalid", violations.iterator().next().getMessage());
    }

    @Test
    public void testNullEmail(){
        recruiter.setEmailId(null);
        Set<ConstraintViolation<Recruiter>> violations = validator.validate(recruiter);
        assertEquals("Email Id is Required", violations.iterator().next().getMessage());
    }

    @Test
    public void testInvalidEmail(){
        recruiter.setEmailId("invalidEmail");
        Set<ConstraintViolation<Recruiter>> violations = validator.validate(recruiter);
        assertEquals("Please provide a valid email address", violations.iterator().next().getMessage());
    }









}
