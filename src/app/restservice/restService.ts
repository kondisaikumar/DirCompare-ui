import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RestService {
    constructor(private http: HttpClient) {
    }
    postDiffPaths(url: string) {
return this.http.get(url).pipe(map((response => {

    return response;
}
)
)
);
}
}
