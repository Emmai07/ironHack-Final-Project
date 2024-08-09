package com.example.demo;

import com.example.demo.Model.Tutorial;
import com.example.demo.Repository.TutorialRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.annotation.Rollback;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

//@DataJpaTest
class DoctorRepositoryTest {

    @Autowired
    private TutorialRepository tutorialRepository;

    @Test
    void testFindBySpecialty() {
        // Given
        Tutorial tutorial = new Tutorial();
        tutorial.setDescription("desc");
        tutorial.setPublished("true");
        tutorial.setTitle("title");

        tutorialRepository.save(tutorial);

        // When
        Optional<Tutorial> doctors = tutorialRepository.findById(1);

        // Then
        assertThat(doctors).isNotEmpty();
        assertThat(doctors.get().getDescription()).isEqualTo("description");
    }

    @Test
    void testSaveDoctor() {
        // Given
        Tutorial tutorial = new Tutorial();
        tutorial.setTitle("title");
        tutorial.setPublished("false");
        tutorial.setDescription("description");

        // When
        Tutorial savedDoctor = tutorialRepository.save(tutorial);

        // Then
        assertThat(savedDoctor.getId()).isNotNull();
        assertThat(savedDoctor.getTitle()).isEqualTo("title");
        assertThat(savedDoctor.getDescription()).isEqualTo("description");
    }

    @Test
    void testDeleteDoctor() {
        // Given
        Tutorial tutorial = new Tutorial();
        tutorial.setDescription("desc");
        tutorial.setPublished("true");
        tutorial.setTitle("title");

        tutorialRepository.save(tutorial);
        int doctorId = tutorial.getId();

        // When
        tutorialRepository.deleteById(doctorId);

        // Then
        assertThat(tutorialRepository.findById(doctorId)).isNotPresent();
    }
}
