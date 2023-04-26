export function getType(link) {
    if(link?.includes('twitter'))
        return 'twitter'

    if(link?.includes('instagram'))
        return 'insta'
    
    if(link?.includes('telegram'))
        return 'telegram'

    if(link?.includes('linkedin'))
        return 'linkedin'
    else 
        return 'website'
}