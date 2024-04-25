# Theory

In this experiment, the behaviour of some control systems will be analysed and simulation of their responses will be observed with the help of four problem statements.
<br><br>

<b>Problem 1 :</b><br/>

Observe the response of a unity feedback system (Fig. 1) and its rise time, settling time and percentage maximum over shoot for different values of &zeta; (damping ratio).
<br>

<div align="center">				
<img alt="" src="./images/fig1.png" class="img-fluid">

<b>Fig. 1. A simple second order system</b>
</div><br>

<b>Unity feedback system :</b><br/>

If the output or some part of the output is returned to the input side and utilized as part of the system input, then it is known as feedback. Feedback plays an important role in order to improve the performance of the control systems.
Negative feedback reduces the error between the reference input <span class="fontCss">R</span><span class="fontCss2">(s)</span> and system output. The above figure (Fig. 1) shows the block diagram of the negative feedback control system.
Since <span class="fontCss">H</span><span class="fontCss2">(s)</span> = 1, hence it is a unity feedback system.<br/>
Transfer function of negative feedback control system is,

$$T = \frac{G}{1 + GH}$$


where,<br/>

<span class="fontCss">T</span> is the transfer function or overall gain of negative feedback control system.<br/>

<span class="fontCss">G</span> is the open loop gain, which is function of frequency.<br/>

<span class="fontCss">H</span> is the gain of feedback path, which is function of frequency.<br/><br/>

<b> Second order system:</b><br/>

The open loop transfer function of the second order unity feedback system is given by,

$$G(s) =  \frac{\omega_{n}^2}{s ( s + 2 \zeta \omega_n )}$$

The closed loop transfer function of the second order unity feedback system is given by,

$$\frac{Y(s)}{R(s)} = \frac{G(s)}{1 + G(s)} = \frac{\omega_{n}^2}{s^2 + 2 \zeta \omega_n s + \omega_{n}^2}$$

where,<br/>

<span class="fontCss">R</span><span class="fontCss2">(s)</span> = Laplace transform of the input signal r(t),<br/>

<span class="fontCss">Y</span><span class="fontCss2">(s)</span> = Laplace transform of the output signal y(t),<br/>

&zeta; = Damping ratio,<br/>

<span class="fontCss">&omega;<sub>n</sub></span> = Natrural frequency of oscillations.<br/><br/>

The characteristic equation of the second order system is given by equating the denominator of the closed loop transfer function to zero.

$$( s^2 + 2 \zeta \omega_n s + \omega_{n}^2 ) = 0$$

The expression for the response of the second order system can be written as,

$$Y(s) = \frac{ \omega_{n}^2 }{ s^2 + 2 \zeta \omega_n s + \omega_{n}^2 } R(s) \  ----(1)$$

When &zeta; = 0, the system is undamped.<br/>

When &zeta; = 1, the system is critically damped.<br/>

When 0 < &zeta; < 1, the system is under damped.<br/><br/>

<b>Unit step response of second order system</b><br/>

Apply unit step signal at the input of the second order system,<br/>

$$r(t) = u(t)$$

Taking laplace transform on the both sides<br/>

$$R(s) = \frac{1}{s}$$

<b>Case 1 : when &zeta; = 0  i.e.  system is undamped</b><br/>

The equation 1 becomes,

$$Y(s) = \frac{\omega_{n}^2}{s^2 + \omega_{n}^2} R(s)$$

$$Substituting \ R(s) = \frac{1}{s}$$

$$Y(s) = \frac{\omega_{n}^2}{s ( s^2 + \omega_{n}^2 )} $$

Taking the inverse laplace transform on both the sides, we have,

$$Y(t) = ( 1 - cos ( \omega_n t )) \ u(t) \ ----(2)$$

The equation (2), shows that the unit step response of an undamped system is a continuous time signal of constant amplitude and frequency.<br/><br/>


<b>Case 2 : when &zeta; = 1  i.e.  system is critically damped</b><br/>

The equation 1 becomes,

$$Y(s) = \frac{\omega_{n}^2}{s^2 + 2 \omega_n s + \omega_{n}^2} R(s) = \frac{\omega_{n}^2}{( s + \omega_{n} )^2} R(s)$$

$$Substituting \ R(s) = \frac{1}{s}$$

$$Y(s) = \frac{\omega_{n}^2}{ s (s + \omega_{n} )^2 } $$

After the partial fraction, taking the inverse laplace transform on both the sides, we have,

$$Y(t) = ( 1 - e^{- \omega_n t} -  \omega_n t e^{- \omega_n t} ) \ u(t) \  ----(3)$$

When the system is critically damped then, the equation (3) shows, that the unit step response of the second order system would try to reach the steady state step input.<br/><br/>

<b>Case 3 : when 0 < &zeta; < 1  i.e.  system is under damped</b><br/>

The equation 1 can be written as,

$$Y(s) = \frac{\omega_{n}^2}{(( s + \zeta \omega_{n} )^2 + \omega_{n}^2 ( 1 - \zeta^2 ))} R(s)$$

$$Substituting \ R(s) = \frac{1}{s}$$

$$Y(s) = \frac{\omega_{n}^2}{s (( s + \zeta \omega_{n} )^2 + \omega_{n}^2 ( 1 - \zeta^2 ))} $$

After the partial fraction, taking the inverse laplace transform on both the sides, we have,

$$Y(t) = ( 1 - \frac{e^{- \zeta \omega_n t}}{\sqrt{(1 - \zeta^2)}} sin ( \omega_n \sqrt {( 1 - \zeta^2 )} \ t + cos^{-1}\zeta)) \ u(t) \ ----(4)$$

The equation (4) shows, when the system is under damped then, the unit step response of the system is having damped oscillations i.e. response of decreasing amplitude.<br/><br/>


<b>Unit impulse response of second order system</b><br/>

Apply unit impulse signal at the input of the second order system,<br/>

$$r(t) = \delta(t)$$

Taking laplace transform on the both sides<br/>

$$R(s) = 1$$

The expression for the response of the second order system for unit impulse input can be written as,

$$Y(s) = \frac{ \omega_{n}^2 }{ s^2 + 2 \zeta \omega_n s + \omega_{n}^2 } \ ---(5)$$

After the necessary calculations, taking inverse laplace on both the sides, we get,<br/>

<b>Case 1 : when &zeta; = 0  i.e.  system is undamped</b><br/>

$$Y(t) = \omega_n  sin ( \omega_n t)  \ for \ t  \ \geq \ 0 \ ----(6)$$


<b>Case 2 : when &zeta; = 1  i.e.  system is critically damped</b><br/>

$$Y(t) = \omega_{n}^2 t e^{- \omega_n t} \ for \ t \ \geq \ 0 \ ----(7)$$


<b>Case 3 : when 0 < &zeta; < 1  i.e.  system is under damped</b><br/>

$$Y(t) = \frac{ \omega_n e^{- \zeta \omega_n t}}{\sqrt{(1 - \zeta^2)}} sin ( \omega_n \sqrt {( 1 - \zeta^2 )} \ t ) \ for \ t \ \geq \ 0 \ ----(8)$$

<br/><br/>

<b>Problem 2 :</b><br/>

Plot the root loci for the unity feedback system given in Fig. 1. Where,
$$G( s ) = K G_1( s ) = \frac{K}{s ( s + 1 )( s + 2 )}$$
Assume that the amplifier gain (<span class="fontCss">K</span>) is varied from 0 to 50. Indicate the value of the gain <span class="fontCss">K</span> for which the root locus crosses the imaginary axis. Plot the output response for <span class="fontCss">K</span> = 0.4, 2,
6 and 12.


<br/>
The characteristic equation of the system (considered in problem-2) is 
$$1 + K \ G_1(s) H(s) = 0 ---(9)$$

The root locus is the path of the roots of characteristic equation traced out in s-plane as gain <span class="fontCss">K</span> is changed from 0 to &infin; and it is symmetrical about the real axis.
<br/>

<b>Construction of Root Locus:</b><br/>
<b>Branch</b><br/>
The root locus branches start at the open loop poles and end at open loop zeros. So, the number of root locus branches <span class="fontCss">N</span> is equal to the number of finite open loop poles <span class="fontCss">P</span> or the number of finite open loop zeros <span class="fontCss">Z</span>, whichever is greater.

Mathematically, the number of root locus branches <span class="fontCss">N</span> can be written as

$$N = P \ if \ P\geq Z ---(10)$$
$$N = Z \ if \ Z\gt P ---(11)$$

<!-- If the angle of the open loop transfer function at a point is an odd multiple of 180&deg;, then that point is on the root locus.--> 
If odd number of open loop poles and zeros exist to	the left side of a point on the real axis, then that point is on the root locus branch.<br/><br/>

<b>Centroid (<i>&alpha;</i>) :</b><br/>

$$\alpha = \frac{\sum{Real \ part \ of \ finite \ open \ loop \ poles} - \sum{Real \ part \ of \ finite \ open \ loop \ zeros}}{P - Z} ---(12)$$

<b>Angle of asymptotes (<span class="fontCss">&theta;</span>) :</b>

$$\theta = \frac{(2q + 1)180^\circ}{P - Z} ---(13)$$

where <span class="fontCss">q = 0, 1, 2,...(P-Z)-1</span><br/>

<br/> <b>Break-away and Break-in points :</b><br/>
If there exists a real axis root locus branch between two open loop poles, then there will be a break-away point in between these two open loop poles.
If there exists a real axis root locus branch between two open loop zeros, then there will be a break-in point in between these two open loop zeros.<br/>

Note : Break-away and break-in points exist only on the real axis root locus branches.<br/><br/>


Steps to find break-away and break-in points :<br/>

1) Write <span class="fontCss">K</span> in terms of s from the characteristic equation (equation 9).<br/>

2) Differentiate <span class="fontCss">K</span> with respect to s and make it equal to zero. Substitute these values of s in the above equation (found from step 1).<br/>

3) The values of s for which the <span class="fontCss">K</span> value is positive are the break points.

<br/><br/>

<b>Problem 3 :</b><br/>
Check the stability of the unity feedback system given in Fig. 1. Where,

$$G ( s ) = \frac{2}{s ( s + 1 )( s + 2 )} \ and \ H ( s ) = 1$$

by drawing the Bode and Nyquist diagrams and indicate gain margin, phase margin, gain crossover frequency, phase crossover frequency.
<br/><br/>
Nyquist plots are used to draw the complete frequency response of the open loop transfer function.<br/>

If <span class="fontCss">P</span> = Number of  open loop poles in the the right half of the s-plane and <span class="fontCss">Z</span> =  Number of  closed loop poles in the the right half of the s-plane then <br/>
the number of encirclements <span class="fontCss">N</span> can be written as,

$$N = P - Z ---(14)$$

The open loop control system is stable if there is no open loop pole in the the right half of the s-plane.
$$P = 0 ; N = -Z$$

The closed loop control system is stable if there is no closed loop pole in the right half of the s-plane.
$$Z = 0 ; N = P$$


<b>General steps for drawing Nyquist plots :</b><br/>

i) Locate the poles and zeros of open loop transfer function <span class="fontCss">G</span><span class="fontCss2">(s)</span><span class="fontCss">H</span><span class="fontCss2">(s)</span></span> in s plane.<br/>

ii)	Draw the polar plot by varying <span class="fontCss">&omega;</span> (angular frequency) from zero to infinity. If pole or zero present at s = 0, then varying <span class="fontCss">&omega;</span> from 0+ to infinity for drawing polar plot.<br/>

iii) Draw the mirror image of above polar plot for values of <span class="fontCss">&omega;</span> ranging from −&infin; to zero (0− if any pole or zero present at s = 0).<br/>

iv)	The infinite radius half circle will start at the point where the mirror image of the polar plot ends and this infinite radius half circle will end at the point where the polar plot starts.<br/>

v)	After drawing the Nyquist plot, we can find the stability of the closed loop control system using the Nyquist stability criterion.
If the critical point (-1+j0) lies outside the encirclement, then the closed loop control system is absolutely stable.<br/><br/>
    

<b>Stability Analysis using Nyquist Plots :</b><br/>
From the Nyquist plots, we can identify whether the control system is stable, marginally stable or unstable based on the values of the following parameters.<br/>

Gain cross over frequency (<span class="fontCss">&omega;<sub>gc</sub></span>) and phase cross over frequency (<span class="fontCss">&omega;<sub>pc</sub></span>).<br/>
Gain margin (GM) and phase margin (PM)<br/><br/>

<b>Phase cross over frequency (<span class="fontCss">&omega;<sub>pc</sub></span>) :</b><br/>
The frequency at which the Nyquist plot intersects the negative real axis (phase angle is 180&deg;) is known as the phase cross over frequency. It is denoted by <span class="fontCss">&omega;<sub>pc</sub></span>.<br/><br/>


<b>Gain cross over frequency (<span class="fontCss">&omega;<sub>gc</sub></span>) :</b><br/>
The frequency at which the Nyquist plot is having the magnitude of one is known as the gain cross over frequency. It is denoted by <span class="fontCss">&omega;<sub>gc</sub></span>.<br/><br/>


The stability of the control system based on the relation between phase cross over frequency and gain cross over frequency is discussed below.<br/><br/>

i) If the phase cross over frequency (<span class="fontCss">&omega;<sub>pc</sub></span>) is greater than the gain cross over frequency (<span class="fontCss">&omega;<sub>gc</sub></span>), then the system is stable.<br/>

ii) If the phase cross over frequency (<span class="fontCss">&omega;<sub>pc</sub></span>) is equal to the gain cross over frequency (<span class="fontCss">&omega;<sub>gc</sub></span>), then the system is marginally stable.<br/>

iii) If phase cross over frequency (<span class="fontCss">&omega;<sub>pc</sub></span>) is less than gain cross over frequency (<span class="fontCss">&omega;<sub>gc</sub></span>), then the system is unstable.<br/>

<br/><b>Gain Margin</b><br/>

The gain margin (GM) is equal to the reciprocal of the magnitude of the Nyquist plot at the phase cross over frequency.

$$GM = \frac{1}{M_{pc}} ---(15)$$
where, M<sub>pc</sub> is the magnitude in normal scale at the phase cross over frequency.<br/>

<br/><b>Phase Margin</b><br/>
The phase margin (PM) is equal to the sum of 180&deg; and the phase angle at the gain cross over frequency.

$$PM = 180^\circ + \phi_{gc} ---(16)$$
where, <span class="fontCss">&phi;<sub>gc</sub></span> is the phase angle at the gain cross over frequency.<br/><br/>

The stability of the control system based on the relation between the gain margin and the phase margin is discussed below.<br/>

i) If the gain margin (GM) is greater than one and the phase margin (PM) is positive, then the control system is stable.<br/>

ii) If the gain margin (GM) is equal to one and the phase margin (PM) is zero degrees, then the control system is marginally stable.<br/>

iii) If the gain margin (GM) is less than one and / or the phase margin (PM) is negative, then the control system is unstable.<br/>

<br/><b>Bode Plot</b><br/>
The Bode plot or the Bode diagram consists of two plots :-<br/>

1. Magnitude plot<br/>
2. Phase plot<br/>

In both the plots, x-axis represents angular frequency (logarithmic scale). Whereas, yaxis represents the magnitude (linear scale) of open loop transfer function in the magnitude plot and the phase angle (linear scale) of the open loop transfer function in the phase plot.

The magnitude of the open loop transfer function in dB is -

$$M = 20 \ log \ |G ( j \omega ) H ( j \omega )| ---(17)$$

The phase angle of the open loop transfer function in degrees is -

$$\phi = \angle G ( j \omega ) H ( j \omega ) ---(18)$$

Note − The base of logarithm is 10.
    
<br/><br/>
<b>Problem 4 :</b><br/>
Obtain the system response of a permanent magnet dc motor (given in Fig. 2)				


<div align="center">				
<img alt="" class="img-fluid" src="./images/pr4.png"><br/>
<b>Fig. 2. A shunt dc motor diagram</b>
</div><br>

where, <span class="fontCss">&omega;</span> : Speed (rad/sec) of the motor.<br> 
<span class="fontCss">R<sub>a</sub></span> : Armature resistance (ohms)<br>
<span class="fontCss">L<sub>a</sub></span> : Armature inductance (henry)<br>
<span class="fontCss">T</span> : Load torque (newton-m)<br>
<span class="fontCss">V</span> : Supply voltage (volts)<br>

<b>DC Motor model :</b><br>

Let us assume a general schematic diagram of a dc motor, shown in Fig. 3. Assume the following notations are used.<br/>
<div align="center">				
<img alt="" class="img-fluid" src="./images/dc.png" ><br/>
<b>Fig. 3. Schematic diagram of dc motor</b>
</div><br/>

<span class="fontCss3">e<sub>a</sub></span> : Armature voltage (volts)<br>
<span class="fontCss3">i<sub>a</sub></span> : Armature current (amp.)<br>
<span class="fontCss">R<sub>a</sub></span> : Armature resistance (ohms)<br>
<span class="fontCss">L<sub>a</sub></span> : Armature inductance (henry)<br>
<span class="fontCss3">e<sub>b</sub></span> : Back emf (volts)<br>
<span class="fontCss3">i<sub>f</sub></span> : Field current (amp.)<br>
<span class="fontCss">T<sub>M</sub></span> : Motor torque (newton-m)<br>
<span class="fontCss">T<sub>L</sub></span> : Load torque (newton-m)<br>
<span class="fontCss">&omega;</span> : Angular velocity (rad/sec)<br>
<span class="fontCss">J</span> : Moment of inertia of the rotor including external loading if any (newton-m/rad/sec<sup>2</sup>)<br>
<span class="fontCss">B</span> : Viscous friction coefficient including external loading if any (newton-m/rad/sec)<br>
<span class="fontCss">K<sub>T</sub></span> : Torque constant<br>
<span class="fontCss">K<sub>b</sub></span> : Back emf constant<br>


<br/> Upper case notations <span class="fontCss">E<sub>a</sub>, I<sub>a</sub>, E<sub>b</sub>, I<sub>f</sub></span>
are used for steady state values of the respective
variables <span class="fontCss3">e<sub>a</sub>, i<sub>a</sub>, e<sub>b</sub></span> and <span class="fontCss2">i<sub>f</sub></span>				
<br>
In the present setup a permanent magnet dc motor is used, the field winding is thus absent and the air gap flux is constant. 
The input drive may therefore be applied to the armature only, i.e. only armature controlled operation is possible.
The mathematical equations in this operating mode are, 

$$T_{M} = K_{T} I_a ---(19)$$

$$e_{b} = K_{b} \omega ---(20)$$

Armature circuit model

$$L_a\frac{di_a}{dt} + R_a i_a + e_b = e_a ---(21)$$

Mechanical model

$$J\frac{d\omega}{dt} + B\omega + T_L = T_M ---(22)$$

Taking Laplace Transform and rearranging the terms,

$$\frac{\omega(s)}{E_a(s)} = \frac{K_T}{(sL_a + R_a)(sJ + B) + K_T K_b} ---(23)$$

Assuming the inductance of the armature circuit to be very small, the motor transfer function may be written as, 

$$G_M(s) = \frac{\omega(s)}{E_a(s)} = \frac{K_T/R_a}{Js + B + \frac{K_T K_b}{R_a}} = \frac{K_M}{s\tau_m + 1}   ----(24)$$

Motor gain constant (<span class="fontCss">K<sub>M</sub></span>)

$$K_M = \frac{K_T}{R_a B + K_T K_b}$$

Motor time constant (<span class="fontCss3">&tau;<sub>m</sub></span>)

$$\tau_m = \frac{R_a J}{R_a B + K_T K_b}$$


The armature controlled motor therefore has a first order type-0 transfer function and the two constant <span class="fontCss">K<sub>M</sub></span> and <span class="fontCss3">&tau;<sub>m</sub></span>
depend upon motor parameters.<br/><br/>


<link href="./simulation/css/cs.css" rel="stylesheet">			    
						
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>								