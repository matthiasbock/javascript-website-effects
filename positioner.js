function setpos(id, newx, newy) {
        e = get(id);
        e.style.left = newx;
        e.style.top = newy;
        }

function setsamepos(id_target, id_source) {
        source = get(id_source);
        setpos(id_target, source.offsetLeft, source.offsetTop);
        }

function center(id) {
        e = get(id);
        newx = (window.innerWidth/2) - (e.clientWidth/2);
        newy = window.innerHeight/2 - e.clientHeight/2;
        setpos(id, newx, newy);
        }

function slide(id, x2, y2, time) {
        e = get(id);
        x1 = e.offsetLeft;
        y1 = e.offsetTop;
        steps = 30;
        delay = time/steps;
        dx = (x2-x1)/steps;
        dy = (y2-y1)/steps;

        for (step=1; step<=steps; step++) {
                p = x1+step*dx;
                q = y1+step*dy;
                window.setTimeout("setpos('"+id+"', "+p+", "+q+");", step*delay);
                }
        }

function move(id, dx, dy) {
        e = get(id);
        e.style.left = e.offsetLeft + dx;
        e.style.top = e.offsetTop + dy;
        }

function setsize(id, width, height) {
        e = get(id);
        e.style.width = width;
        e.style.height = height;
        }

function setsamesize(id_target, id_source) {
        source = get(id_source);
        setsize(id_target, source.offsetWidth, source.offsetHeight);
        }

function grow(id, new_width, new_height, time) {
        e = get(id);
        start_width = e.clientWidth;
        start_height = e.clientHeight;

        steps = 40;
        delay = time/steps;
        dw = (new_width - start_width) / steps;
        dh = (new_height - start_height) / steps;

        for (step=1; step<=steps; step++) {
                w = start_width + step*dw;
                h = start_height + step*dh;
                window.setTimeout("setsize('"+id+"', "+w+", "+h+");", step*delay);
                }
        }

