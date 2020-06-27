package com.dashboard.api.service;

import com.dashboard.api.model.Recruiter;
import com.dashboard.api.repository.RecruiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class RecruiterService {

    @Autowired
    private RecruiterRepository recruiterRepository;


    public Recruiter addOrUpdateRecruiter(Recruiter recruiter){
        return recruiterRepository.save(recruiter);
    }


    public List<Recruiter> getAllRecruiters(Integer pageNo, Integer pageSize, String sortBy) {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy).descending());
        Page<Recruiter> pagedResult = recruiterRepository.findAll(paging);
        if (pagedResult.hasContent()) {
            return pagedResult.getContent();
        } else {
            return new ArrayList<>();
        }
    }
}
