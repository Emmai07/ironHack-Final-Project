package com.example.demo.Repository;

import com.example.demo.Model.Comment;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    List<Comment> findByTutorialId(int postId);

    @Transactional
    void deleteByTutorialId(int tutorialId);
}
