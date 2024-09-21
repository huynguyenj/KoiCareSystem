package group7.se1876.kcs_backend.entity;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

@Table (name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column (name = "userName")
    private String userName;

    @Column (name = "password")

    private String password;

    @Column (name = "phone")
    private Long phone;

    @Column (name = "email",nullable = false,unique = true)
    private String email;

    @Column (name = "status")
    private boolean status;

}
