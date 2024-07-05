### Procedure


<div align="center">
<img class="img-fluid"  src="./images/fig1.png" alt="">

<b>Fig. 1. Unity feedback control system</b>								  
</div>


<p><b>Steps to perform the simuation</b>

<b>Problem-1 (Observe the response of a unity feedback system for different values of &zeta;)</b>

1. First click on "Problem 1" button and select the input signal (Unit Step or Unit Impluse). In the given unity feedback system (Fig. 1), set the value of &zeta; (damping ratio) through the up-down arrows
in the input box in denominator of plant transfer function <span class="fontCss">G</span><span class="fontCss2"> (s)</span>.

2. &zeta; can be varied from 0 to 1. After the value of &zeta; is set click on the 'RUN' button to observe the system response for the particular input signal and &zeta value. After changing the &zeta; value there will be one confirm message box for showing compared plots for different entered &zeta; values. Check the 'Yes' option
and click on 'OK' button at the bottom of the box. Compared plots for all &zeta; values chosen will be shown (&zeta; can be varied upto five values to observe compared plots).

3. Click on 'Download Plot' button to download the response plot. Click on 'Ok' button.

4. Click on '3D-Plot' button then on either '3D Step' or '3D Impulse' (depending on the type of input signal, chosen in step 1) to observe the 3D response plot for that particular input signal, where x-axis represents time (sec), y-axis represents &zeta; (damping ratio) and z-axis represents the system response. Hover on the plot area and click on the camera icon in the top right corner to download this 3D plot. Click on 'Ok' button.

5. Change the value of &zeta; and repeat step 2-4.			


<div align="center">
<img class="img-fluid"  src="./images/pr2.png" alt="">

<b>Fig. 2. Unity feedback control system for Root Loci plot, Bode plot and Nyquist plot</b>				          
</div>


<b>Problem-2 (Plot the root loci for the unity feedback system)</b>

1. First click on "Problem 2" button and select the input signal (Unit Step or Unit Impluse). In the given unity feedback system (Fig. 2), set the value of <span class="fontCss">K</span> (amplifier gain) through the up-down arrows in the input box in numarator of plant transfer function <span class="fontCss">G</span><span class="fontCss2"> (s)</span>.

2. <span class="fontCss">K</span> can be varied from 1 to 50. After the value of <span class="fontCss">K</span> is set click on the 'RUN' button, then on 'Root Locus' to observe the root locus plot of the system for that particular amplifier gain. The plot can be zoomed by selecting an area under the plot. Click on 'Ok' button to clear it. Similarly, click on the 'RUN' button, then on 'Output Response' to observe the system response for the particular input signal and <span class="fontCss">K</span> value. After changing the <span class="fontCss">K</span> value there will be one confirm message box for showing compared system response plots for different entered <span class="fontCss">K</span> values. Check the 'Yes' option and click on 'OK' button at the bottom of the box. Compared output response plots for all <span class="fontCss">K</span> values chosen will be shown (<span class="fontCss">K</span> can be varied upto five values to observe compared output response plots).

3. The plots can be downloaded by clicking on 'Download Plot' button. Click on 'Ok' button.

4. Change the value of gain <span class="fontCss">K</span> and repeat step 2-3.			


<b>Problem-3 (Bode and Nyquist plot for the unity feedback system)</b>

1. First click on "Problem 3" button and enter the desired range for angular frequency &omega; in the
input box below the block diagram. The plant transfer function <span class="fontCss">G</span><span class="fontCss2"> (s)</span> is given (Fig. 2).

2. Click on the 'RUN' button, then on 'Bode Plot' to observe the Bode plot of <span class="fontCss">G</span><span class="fontCss2"> (s)</span><span class="fontCss"> H</span><span class="fontCss2"> (s)</span>. The plot can be zoomed by selecting an area under the plot. Click on 'Ok' button to clear it. Similarly, click on the 'RUN' button, then on 'Nyquist Plot' to observe the Nyquist plot of <span class="fontCss">G</span><span class="fontCss2"> (s)</span><span class="fontCss"> H</span><span class="fontCss2"> (s)</span>.

3. The plots can be downloaded by clicking on 'Download Plot' button. Click on 'Ok' button.

4. Observe the gain margin, phase margin, gain cross over frequency and phase cross over frequency.

5. Change the value of gain <span class="fontCss">K</span> and repeat step 2-4.


<div align="center">
<img class="img-fluid"  src="./images/pr4.png" alt="">

<b>Fig. 3. A shunt dc motor diagram</b>
</div>

<b>Problem-4 (System response of a Permanent Magnet DC Motor)</b>

1. First click on "Problem 4" button and enter the desired value of supply voltage <span class="fontCss">V</span>. The dc motor circuit diagram is provided (Fig. 3).

2. Click on the 'RUN' button to observe the system response (speed (rad/s) vs. time (sec)) as well as the motor armature current (amp.), speed (rad/s), motor torque (<span class="fontCss">T<sub>M</sub></span>) (N-m), load torque (<span class="fontCss">T<sub>L</sub></span>) (N-m).

3. The plot can be downloaded by clicking on 'Download Plot' button. Click on 'Ok' button.

4. Change the value of supply voltage <span class="fontCss">V</span> and repeat step 2-3. After changing the <span class="fontCss">V</span> value there will be one confirm message box for showing compared system response plots for different entered <span class="fontCss">V</span> values. Check the 'Yes' option and click on 'OK' button at the bottom of the box. Compared output response plots for all <span class="fontCss">V</span> values chosen will be shown (<span class="fontCss">V</span> can be varied upto five values to observe compared plots).

  
<link href="./simulation/css/cs.css" rel="stylesheet">

  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>