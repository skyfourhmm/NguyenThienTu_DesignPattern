package vn.edu.iuh.fit.dhktpm17a.springbootrenderdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.edu.iuh.fit.dhktpm17a.springbootrenderdemo.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}