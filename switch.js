const prompt = require("prompt-sync")();
const entrada = prompt('escolha uma fruta?')
switch (entrada) {
    case 'Orange' :
        console.log('Orange are $0.59 a pound.');
        break;
        case 'manga':
            console.log('manga custa $4.79 a pound')
            break;
        case 'bergamota':
            console.log('bergamota custa $1.99 a pound.')
        break;
        default:
            
        console.log(`Sorry,we are out of ${entrada}.`);
}
