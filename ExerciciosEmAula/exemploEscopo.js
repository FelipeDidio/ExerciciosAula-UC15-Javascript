function escopo(){ 
    var x = 10;
    if (true) {
        let y = 20;
        const z = 30;
        console.log(x + y + z);
    }
    console.log(x + y + z);
}
escopo();