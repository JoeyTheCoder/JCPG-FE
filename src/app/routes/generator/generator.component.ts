import { Component, OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/services/generator.service';
import { pokemon } from 'src/app/services/pokemon';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  my_data1: any;
  my_data2: any;
  my_data3: any;
  my_data4: any;
  my_data5: any;
  my_data6: any;

  pokemon: pokemon[] | undefined;


  constructor(public generatorService: GeneratorService) { }

  ngOnInit(): void {
    this.generatorService.generateId();
  }

  showPokemon() {
    this.showPokemon1();
    this.showPokemon2();
    this.showPokemon3();
    this.showPokemon4();
    this.showPokemon5();
    this.showPokemon6();
    this.generatorService.generateId();
  }

  showPokemon1() {
    this.generatorService.getPokemon1().subscribe((data: pokemon[]) => this.my_data1 = data);
  }
  showPokemon2() {
    this.generatorService.getPokemon2().subscribe((data: pokemon[]) => this.my_data2 = data);
   
  }
  showPokemon3() {
    this.generatorService.getPokemon3().subscribe((data: pokemon[]) => this.my_data3 = data);
  
  }
  showPokemon4() {
    this.generatorService.getPokemon4().subscribe((data: pokemon[]) => this.my_data4 = data);

  }
  showPokemon5() {
    this.generatorService.getPokemon5().subscribe((data: pokemon[]) => this.my_data5 = data);
  }
  showPokemon6() {
    this.generatorService.getPokemon6().subscribe((data: pokemon[]) => this.my_data6 = data);
  }
}
