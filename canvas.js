function line(x1, y1, x2, y2) {
        var context = get('Canvas').getContext('2d');

        context.strokeStyle = '#2fac66';
        context.lineWidth   = 4;
        context.lineCap = "round";

        context.beginPath();

        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();

        context.closePath();
        }

function growLine(x1, y1, x2, y2, time) {
        steps = 50
        delay = time/steps
        dx = (x2-x1)/steps
        dy = (y2-y1)/steps
        for (step=1; step                p1 = x1+(step-1)*dx
                q1 = y1+(step-1)*dy
                p2 = x1+step*dx
                q2 = y1+step*dy
                window.setTimeout("line("+p1+", "+q1+", "+p2+", "+q2+");", step*delay);
                }
        }

function growBranch(points, time) {
        delay = time / (points.length-1);
        for (var i = 0; i < points.length-1; i++) {
                window.setTimeout("growLine("+points[i][0]+", "+points[i][1]+", "+points[i+1][0]+", "+points[i+1][1]+", "+delay+");", i*delay);
                }
        }

function knubbel(x, y) {
        var context = get('Canvas').getContext('2d');

        var radius = 5;

        context.beginPath();

        context.arc(x, y, radius, 0, 2*Math.PI, false);
        context.fillStyle = '#2fac66';
        context.fill();

        context.closePath();
        }

function putImage(src, x, y, w, h) {
        var img = new Image();
        img.onload = function() {
                                var context = get('Canvas').getContext('2d');
                                context.drawImage(img, x, y, w, h);
                                };
        img.src = src;
        }

