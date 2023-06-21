import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})

export class RateComponent implements OnInit {
	rExp = new RegExp('RUB', "")
	isIncreased = 0
	@Input() quoteName: string;
	@Input() 
	get diffQuote(): string {return "(" + this._diffQuote + ")"}
	set diffQuote(diffQuote: number) {
		this._diffQuote = diffQuote
	}
	@Input()
	get quoteValue(): number {return this._quoteValue};
	set quoteValue(quoteValue: number) {
		this._quoteValue = 1/quoteValue
	}
	private _diffQuote = 0;
	private _quoteValue = 0;
	
	ngOnInit(): void {
		if (+this._diffQuote < 0) 
			this.isIncreased = -1
		else if (+this._diffQuote > 0) 
			this.isIncreased = 1
		else
			this.isIncreased = 0
	}
}