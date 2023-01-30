function replaceAll_1( string1, replaced_text, replacing_text){
    let array = [];
    let index=0;
    if(replaced_text==""){
        array.push(replacing_text);
        for(let i=0;i<string1.length;i++)
        {
            array.push(string1[i]);
            array.push(replacing_text);
        }
    }
    else
    {
        for( i=0;i<string1.length;i++)
        {
            let x = "false";
            if(string1[i]==replaced_text[0])
            {
                for(j=0;j<replaced_text.length;j++)
                {
                    if((i+j)<string1.length && string1[i+j]==replaced_text[j])
                    {
                        x = "true";
                    }
                    else{
                        x = "false";
                    }
                }
                if(x=="true")
                {

                    array.push(string1.slice(index,i));
                    index=i + replaced_text.length;
                    array.push(replacing_text);

                }
            }
        }
        array.push(string1.slice(index,string1.length));
    }
    return array.join("");
}

function concatincate(s) 
{
    for(let i=1;i<arguments.length;i++)
    {
        s += arguments[i];
    }
    return s;
}