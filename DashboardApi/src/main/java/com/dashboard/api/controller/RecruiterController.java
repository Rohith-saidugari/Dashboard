package com.dashboard.api.controller;

import com.dashboard.api.model.Recruiter;
import com.dashboard.api.service.RecruiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/v1/recruiter")
public class RecruiterController {

    @Autowired
    private RecruiterService recruiterService;

    @PostMapping
    public Recruiter addRecruiter(@Valid @RequestBody Recruiter recruiter){
        return recruiterService.addOrUpdateRecruiter(recruiter);
    }
    @PutMapping
    public Recruiter updateRecruiter(@Valid @RequestBody Recruiter recruiter){
        return recruiterService.addOrUpdateRecruiter(recruiter);
    }

    @GetMapping
    public List<Recruiter> getAllRecruiters(){
        return recruiterService.getAllRecruiters();
    }


}
