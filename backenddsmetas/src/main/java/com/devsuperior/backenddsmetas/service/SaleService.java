package com.devsuperior.backenddsmetas.service;

import com.devsuperior.backenddsmetas.entities.Sale;
import com.devsuperior.backenddsmetas.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    public List<Sale> findSales() {
      return  saleRepository.findAll();

    }
}
