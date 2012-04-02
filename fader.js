function setOpacity(id, opacity) {
        get(id).style.opacity = opacity;
        }

function FadeIn(id, time) {
        e = get(id);
        e.style.opacity = 0;
        e.style.visibility = 'visible';
        steps = time/20;
        delay = time/steps;
        for (i=1; i<=steps; i++) {
                window.setTimeout("setOpacity('"+id+"', "+i/steps+");", i*delay);
                }
        }

function FadeOut(id, time) {
        e = get(id);
        e.style.visibility = 'visible';
        e.style.opacity = 1;
        steps = time/20;
        delay = time/steps;
        for (i=1; i<=steps; i++) {
                window.setTimeout("setOpacity('"+id+"', "+(1-i/steps)+");", i*delay);
                }
        window.setTimeout("get('"+id+"').style.visibility = 'hidden';", time);
        }

