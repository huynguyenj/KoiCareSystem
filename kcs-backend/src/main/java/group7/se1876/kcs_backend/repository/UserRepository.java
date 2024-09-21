package group7.se1876.kcs_backend.repository;

import group7.se1876.kcs_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    // existsBy + Your entity property name (can be upper or lowercase but must be correct name)
    boolean existsByUserName(String username);
    Optional<User> findByUserName(String username);
    boolean existsByEmail(String useremail);
}
