package com.dashboard.api.controller;

import com.dashboard.api.model.Recruiter;
import com.dashboard.api.service.RecruiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
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
    public List<Recruiter> getAllRecruiters(@RequestParam(defaultValue = "0") Integer pageNo,
                                            @RequestParam(defaultValue = "10") Integer pageSize,
                                            @RequestParam(defaultValue = "id") String sortBy){
        return recruiterService.getAllRecruiters(pageNo,pageSize,sortBy);
    }


}
