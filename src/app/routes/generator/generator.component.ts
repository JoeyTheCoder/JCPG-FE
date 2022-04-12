import { Component, OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/services/generator.service';
import { pokemon } from 'src/app/services/pokemon';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  pokemon: pokemon[] | undefined;

  constructor(public generatorService: GeneratorService) { }

  ngOnInit(): void {
  }

  showPokemon(){
    this.generatorService.getPokemon().subscribe((response) => {
        console.log('response received')
        this.pokemon = response; 
    })
}
}
