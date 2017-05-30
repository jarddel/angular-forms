import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public customForm: Array<any> = [
    {
        "code": "G-01",
        "description": "Consumo de Água",
        "groupType": 1,
        "customType": "consumo-agua",
        "questions": [
            {
                "code": "P-201",
                "description": "Origem",
                "fieldType": 2,
                "options": ["Rede Pública", "Água Subterrânea", "Água Superficial"],
                "placeholder": "Selecione"
            },
            {
                "code": "P-202",
                "description": "Consumo Médio (m³/dia)",
                "fieldType": 3,
                "placeholder": null
            },
            {
                "code": "P-203",
                "description": "Uso",
                "fieldType": 2,
                "options": ["Doméstico", "Industrial", "Doméstico e Industrial"],
                "placeholder": "Selecione"
            },
            {
                "code": "P-204",
                "description": "Vazão (m³/dia)",
                "fieldType": 3,
                "placeholder": null
            }
        ]
    },
    {
        "code": "G-02",
        "description": "Serviços",
        "groupType": 0,
        "questions": [
            {
                "code": "P-002",
                "description": "Question Radio",
                "fieldType": 1,
                "options": ["Option 1", "Option 2"],
                "defaultOption": "Option 2"
            },
            {
                "code": "P-003",
                "description": "Question Select",
                "fieldType": 2,
                "options": ["Option 1", "Option 2"],
                "placeholder": "Select"
            },
            {
                "code": "P-004",
                "description": "Question Text 1",
                "fieldType": 3
            },
            {
                "code": "P-005",
                "description": "Question Text 2",
                "fieldType": 3,
                "placeholder": "Example"
            }
        ]
    }
  ];

  printValues(values: Object) {
      console.log(values);
  }
}
