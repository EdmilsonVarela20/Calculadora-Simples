
// Funcao Contrutora


function CriaCalculadora(){
    this.display = document.querySelector('.display')
    this.enter = ()=>{
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13){
                this.realizaConta()
            }
        })
    }

    

    this.clickbotoes = ()=>{

        document.addEventListener('click', (e)=>{
            const el = e.target
            
            if (el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText)
            }

            if (el.classList.contains('btn-clear')){
                this.clear()
            }

            if (el.classList.contains('btn-eq')){
                this.realizaConta()
            }

            if (el.classList.contains('btn-del')){
                this.backSpace()
            }
        })
    }


    this.btnParaDisplay = (valor)=>{

        this.display.value += valor
    }


    this.clear = ()=>{

        this.display.value = ''
    }


    this.realizaConta = ()=>{
        let conta = this.display.value
            try {
                conta = eval(conta)
                this.display.value = conta
                
            } catch (error) {
                alert('Conta inválida')
                    return
            }
    }
    
    


    this.backSpace = ()=>{
        this.display.value = this.display.value.slice(0, -1)
    }


    this.inicia = ()=>{

        this.clickbotoes()
        this.enter()
        
    }
}

const calculadora = new CriaCalculadora()
calculadora.inicia()