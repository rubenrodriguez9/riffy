function history(fruit, org){
    if(fruit === 'banana' && org === 'origin'){
        console.log()
        console.log(`Bananas are believed to have originated up to 10,000 years ago and some scientists believe they may have been the world’s first fruit. The first bananas are thought to have grown in the region that includes the Malaya Peninsula, Indonesia, the Philippines and New Guinea.`)
        return ''
    }else if(fruit === 'grapfruit' && org === 'origin'){
        console.log('')
        console.log('The grapefruit was first spotted on the island of Barbados in 1750. A cross between a pommel and a Jamaican sweet orange, it was named for the way it grew in clusters like grapes')
        return ''
    }else if(fruit === 'apple' && org === 'origin'){
        console.log('')
        console.log('The apple tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists.')
        return ''
    }else if(fruit === 'orange'&& org ==='origin'){
        console.log('')
        console.log('The orange originated in a region comprising Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC')
        return ''
    }else if(fruit === 'pear' && org === 'origin'){
        console.log('')
        console.log('The pear is a typical fruit of temperate regions, having its origin and domestication at two different points, China and Asia Minor until the Middle East.')
        return ''
    }else if(fruit === 'grapes' && org === 'origin'){ 
        console.log('')
        console.log('Most grapes come from cultivars of Vitis vinifera, the European grapevine native to the Mediterranean and Central Asia.')
        return ''
    }else if(fruit === 'strawberry' && org === 'origin'){
        console.log('')
        console.log('he garden strawberry was first bred in Brittany, France, in the 1750s via a cross of Fragaria virginiana from eastern North America and Fragaria chiloensis, which was brought from Chile by Amédée-François Frézier in 1714')
        return ''
    } else return 'Please correct second input.'
}
module.exports = history;