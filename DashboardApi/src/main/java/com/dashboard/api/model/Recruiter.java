package com.dashboard.api.model;

import com.dashboard.api.model.validators.ExtendedEmailValidator;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


@Entity
@Table(name="recruiter")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Recruiter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @NotBlank(message = "First Name is Mandatory")
    @Size(min = 1, max = 50)
    @Column(name="first_name",length = 50)
    private String firstName;

    @NotBlank(message = "Last Name is Required")
    @Size(min = 1, max = 50)
    @Column(name="last_name",length = 50)
    private String lastName;


    @NotBlank(message = "Email Id is Required")
    @Size(min = 1, max = 75)
    @ExtendedEmailValidator
    @Column(name="email_id",length = 75)
    private String emailId;

    @NotBlank(message = "Phone Number is Required")
    @Pattern(regexp="(^$|[0-9]{10})",message = "Phone Number is Invalid")
    @Column(name="phone_number")
    private String phoneNumber;

}
