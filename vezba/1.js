const studenti = [
    { ime: "Marko", prezime: "Petrović", godina: 3, ocjene: [9, 8, 7, 10, 9] },
    { ime: "Ana", prezime: "Jovanović", godina: 1, ocjene: [7, 6, 8, 6, 7] },
    { ime: "Luka", prezime: "Simić", godina: 2, ocjene: [10, 9, 10, 8, 9] },
    { ime: "Maja", prezime: "Nikolić", godina: 4, ocjene: [6, 5, 7, 6, 6] },
    { ime: "Ivana", prezime: "Stanković", godina: 1, ocjene: [9, 10, 9, 8, 9] }
    ];


function prosjek(niz){
      let pr=0;
      let br=0;
      for(let i=0;i<niz.length;i++){
        pr=pr+niz[i];
        br=br+1;
      }

      return pr/br;

}

function resenje_a(niz){
    for(let i=0;i<niz.length;i++){
        if(prosjek(niz[i].ocjene)>8.5){
            console.log(niz[i].ime)
   
        }
  
        
    }
}

//resenje_a(studenti)

function maxprosjek(niz){
    let mprosjek=0;
    let ime=" ";
    for(let i=0;i<niz.length;i++){
        if(prosjek(niz[i].ocjene)>mprosjek){
            ime=niz[i].ime;
            mprosjek=prosjek(niz[i].ocjene);
   
        }
    }
    return(ime);

}

 //maxprosjek(studenti);

 function svi_prosjek(niz){
    let br=0;
    let prs=0;
    for(let i=0;i<niz.length;i++){
        prs=prs+prosjek(niz[i].ocjene);
        br=br+1;
    }

    return prs/br
 }

 //console.log(svi_prosjek(studenti))

 function sortiranje(niz){
   let sort={};
   for(let i=0;i<niz.length;i++){
    sort[niz[i].ime]=prosjek(niz[i].ocjene);
   }
    
   sort2= Object.fromEntries(
    Object.entries(sort).sort(([,a],[,b]) => b- a)
);
  
    
   return sort2;
     
 }


 let sort=sortiranje(studenti);
 //console.log(sort);



 //console.log(sortiranje(studenti));


 function dodaj_prosjek(niz){
    for(let i=0;i<niz.length;i++){
        niz[i].prosjek=prosjek(niz[i].ocjene);
    }
    for(let i=0;i<niz.length;i++){
        console.log(niz[i]);
    }
    
    

 }

 dodaj_prosjek(studenti);