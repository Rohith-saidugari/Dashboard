package com.dashboard.api.repository;

import com.dashboard.api.model.Recruiter;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecruiterRepository extends PagingAndSortingRepository<Recruiter,Integer> {

}
