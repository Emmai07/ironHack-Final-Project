package com.example.demo.Repository;

import com.example.demo.Model.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TutorialRepository extends JpaRepository<Tutorial, Integer> {
    List<Tutorial> findByPublished(String published);

    List<Tutorial> findByTitleContaining(String title);
}
