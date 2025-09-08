# Theory

In this experiment, the behaviour of some control systems will be analysed and simulation of their responses will be observed with the help of four problem statements.
<br><br>

<b>Problem 1</b><br/>

Observe the output response of a unity negative feedback system (Fig. 1) for different values of damping ratio (&zeta; = 0, 0.2, 0.4, 0.6, 0.8, 1.0) upto 10 sec when the inputs applied to the system are the unit step and unit impulse.
Plot its rise time, settling time and percentage maximum over shoot for different values of &zeta; for step input. Also plot three dimensional diagram of unit step and unit impulse response curves of the given system 
(taking x-axis as time (t), y-axis as &zeta; and z-axis as an output response).
<br>

<div align="center">				
<img alt="" src="./images/fig1.png" class="img-fluid"><br/>
<b>Fig. 1. A simple second order system</b>
</div><br>

<b>Unity negative feedback system</b><br/>

<br/><div align="center">				
<img alt="" src="./images/dxp1.png" class="img-fluid"><br/><br/>
<b>Fig. 2. Block diagram of a negative feedback transfer function</b>
</div><br/>

If the output or some part of the output is returned to the input side and utilized as part of the system input, then it is known as feedback. Feedback plays an important role in improving the 
performance of control systems.
Negative feedback reduces the error between the reference input <span class="fontCss">R</span><span class="fontCss2">(s)</span> and system output. The above figure (Fig. 1) shows the block diagram of the negative feedback control system.
Since <span class="fontCss">H</span><span class="fontCss2">(s)</span> = 1,  it is known as a unity negative feedback system.<br/>
Transfer function of a negative feedback control system is,

$$T(s) = \frac{G(s)}{1 + G(s)H(s)}$$


where,<br/>

<span class="fontCss">T</span><span class="fontCss2">(s)</span> is the transfer function of a closed loop system (or the overall feedback control system).<br/>

<span class="fontCss">G</span><span class="fontCss2">(s)</span> is the plant transfer function or forward path transfer function.<br/>

<span class="fontCss">H</span><span class="fontCss2">(s)</span> is the feedback transfer function.<br/>

<span class="fontCss">G</span><span class="fontCss2">(s)</span><span class="fontCss">H</span><span class="fontCss2">(s)</span> is called the open loop transfer function.<br/>

<br/>

<b> Second order system</b><br/><!--step response eqn. from ogata pp-166-168, Impulse response eqn. ogata pp-178--->

The open loop transfer function of a second order unity negative feedback system is given by,

$$G(s) =  \frac{\omega_{n}^2}{s ( s + 2 \zeta \omega_n )}$$

The closed loop transfer function of a second order unity negative feedback system is given by,

$$\frac{Y(s)}{R(s)} = \frac{G(s)}{1 + G(s)} = \frac{\omega_{n}^2}{s^2 + 2 \zeta \omega_n s + \omega_{n}^2}$$

where,<br/>

<span class="fontCss">R</span><span class="fontCss2">(s)</span> = Laplace transform of the input signal r(t),<br/>

<span class="fontCss">Y</span><span class="fontCss2">(s)</span> = Laplace transform of the output signal y(t),<br/>

&zeta; = Damping ratio,<br/>

<span class="fontCss">&omega;<sub>n</sub></span> = Natural frequency of oscillation.<br/><br/>

The characteristic equation of the second order system is given by equating the denominator of the closed loop transfer function to zero.

$$( s^2 + 2 \zeta \omega_n s + \omega_{n}^2 ) = 0$$

The expression for the response of the second order system can be written as,

$$Y(s) = \frac{ \omega_{n}^2 }{ s^2 + 2 \zeta \omega_n s + \omega_{n}^2 } R(s) \tag{1}$$

When &zeta; = 0, the system is undamped.<br/>

When &zeta; = 1, the system is critically damped.<br/>

When 0 < &zeta; < 1, the system is underdamped.<br/>

<!-- When &zeta; > 1, the system is  overdamped.<br/> --><br/>

<b>Unit step response of second order system</b><br/>

Apply unit step signal at the input of the second order system,<br/>

$$r(t) = u(t)$$

Taking laplace transform on the both sides<br/>

$$R(s) = \frac{1}{s}$$

<b>Case 1 : when &zeta; = 0  i.e. system is undamped</b><br/>

The equation 1 becomes,

$$Y(s) = \frac{\omega_{n}^2}{s^2 + \omega_{n}^2} R(s)$$

Substituting 

$$R(s) = \frac{1}{s}$$

$$Y(s) = \frac{\omega_{n}^2}{s ( s^2 + \omega_{n}^2 )} $$

Taking the inverse laplace transform on both the sides, we have,

$$y(t) = ( 1 - cos ( \omega_n t )) \ u(t) \tag{2}$$

Equation (2), shows that the unit step response of an undamped system is a signal which oscillates periodically with frequency <span class="fontCss">&omega;<sub>n</sub></span> and an offset of 1, never settling to a single final value.<br/><br/>


<b>Case 2 : when &zeta; = 1  i.e. system is critically damped</b><br/>

The equation 1 becomes,

$$Y(s) = \frac{\omega_{n}^2}{s^2 + 2 \omega_n s + \omega_{n}^2} R(s) = \frac{\omega_{n}^2}{( s + \omega_{n} )^2} R(s)$$

Substituting

$$R(s) = \frac{1}{s}$$

$$Y(s) = \frac{\omega_{n}^2}{ s (s + \omega_{n} )^2 } $$

After the partial fraction, taking the inverse laplace transform on both the sides, we have,

$$y(t) = ( 1 - e^{- \omega_n t} -  \omega_n t e^{- \omega_n t} ) \ u(t) \tag{3}$$

When the system is critically damped then, the equation (3) shows, that the unit step response of the second order system would try to reach the steady state step input.<br/>

$$For \ t \to \infty, \ y(t) = u(t)$$

<br/><br/>

<b>Case 3 : when 0 < &zeta; < 1  i.e. system is underdamped</b><br/>

The equation 1 can be written as,

$$Y(s) = \frac{\omega_{n}^2}{(( s + \zeta \omega_{n} )^2 + \omega_{n}^2 ( 1 - \zeta^2 ))} R(s)$$

Substituting

$$R(s) = \frac{1}{s}$$

$$Y(s) = \frac{\omega_{n}^2}{s (( s + \zeta \omega_{n} )^2 + \omega_{n}^2 ( 1 - \zeta^2 ))} $$

After the partial fraction, taking the inverse laplace transform on both the sides, we have,

$$y(t) = \left( 1 - \frac{e^{- \zeta \omega_n t}}{\sqrt{1 - \zeta^2}} sin ( \omega_n \sqrt { 1 - \zeta^2 } \ t + \phi)\right) \ u(t), \ where \ \phi =  cos^{(-1)}\zeta\tag{4}$$

Equation (4) shows that when the system is underdamped, its unit step response exhibits oscillations whose amplitude decreases over time. 
In other words, the system’s output oscillates but the oscillations gradually diminish until the response settles.<br/><br/>

<b>Rise Time (time to rise from 10% to 90% of final value):</b><br/>

$$T_r = \frac{2.16 \zeta + 0.6}{\omega_n}, \ valid \ for \ (0.3 \leq \zeta \leq 1) \tag{5}$$

<b>Settling Time (to within 2% of final value):</b><br/>

$$T_s = \frac{4}{\zeta \omega_n} \tag{6}$$

<b>Percent maximum overshoot:</b><br/>

$$P.O = e^{\frac{-\zeta \pi}{\sqrt{1 - \zeta^2}}} \times 100 \tag{7}$$

<!-- <b>Case 4 : when &zeta; > 1  i.e. system is overdamped</b><br/><!-----OGATA PP-168-----

In this case, the two poles of equation 1 are negative real and unequal.<br/>

Substituting

$$R(s) = \frac{1}{s}$$

The equation 1 can be written as,<br/>

$$Y(s) = \frac{\omega_{n}^2}{(s + \zeta \omega_{n} + \omega_{n} \sqrt {\zeta^2 - 1})(s + \zeta \omega_{n} - \omega_{n} \sqrt {\zeta^2 - 1})s}$$

The inverse Laplace Transform will be,

$$y(t) = 1 + \frac{\omega_n}{2 \sqrt{\zeta^2 -1}} \left(\frac{e^{- s_1 t}}{s_1} - \frac{e^{- s_2 t}}{s_2}\right) \ for \ t\ge0 \tag{5}$$

where<br/>

$$s_1 = (\zeta + \sqrt{\zeta^2 - 1})\omega_n \ and \ s_2 = (\zeta - \sqrt{\zeta^2 - 1})\omega_n$$

Thus, the response (Eqn. 5) includes two decaying exponential terms. --><br/><br/>

<b>Unit impulse response of second order system</b><br/>

Apply unit impulse signal at the input of the second order system,<br/>

$$r(t) = \delta(t)$$

Taking laplace transform on the both sides<br/>

$$R(s) = 1$$

The expression for the response of the second order system for unit impulse input can be written as,

$$Y(s) = \frac{ \omega_{n}^2 }{ s^2 + 2 \zeta \omega_n s + \omega_{n}^2 } \tag{8}$$

After the necessary calculations, taking inverse laplace on both the sides, we get,<br/>

<b>Case 1 : when &zeta; = 0  i.e. system is undamped</b><br/>

$$y(t) = \omega_n  sin ( \omega_n t)  \ for \ t  \ \geq \ 0 \tag{9}$$


<b>Case 2 : when &zeta; = 1  i.e. system is critically damped</b><br/>

$$y(t) = \omega_{n}^2 t e^{- \omega_n t} \ for \ t \ \geq \ 0 \tag{10}$$


<b>Case 3 : when 0 < &zeta; < 1  i.e. system is underdamped</b><br/>

$$y(t) = \frac{ \omega_n e^{- \zeta \omega_n t}}{\sqrt{(1 - \zeta^2)}} sin ( \omega_n \sqrt {( 1 - \zeta^2 )} \ t ) \ for \ t \ \geq \ 0 \tag{11}$$

<!-- <b>Case 4 : when &zeta; > 1  i.e. system is overdamped</b><br/>

$$y(t) = \frac{\omega_n}{2 \sqrt{\zeta^2 - 1}} (e^{-s_1 t} - e^{-s_2 t}) \ for \ t \ \geq \ 0 \tag{10}$$

where<br/>

$$s_1 = (\zeta - \sqrt{\zeta^2 - 1})\omega_n \ and \ s_2 = (\zeta + \sqrt{\zeta^2 - 1})\omega_n$$ -->

<br/><br/>

<b>Problem 2</b><br/><!--------OGATA PP-273 SAME EXAMPLE---->

Plot the root loci for the unity negative feedback system given in Fig. 1. where,
$$G( s ) = K G_1( s ) = \frac{K}{s ( s + 1 )( s + 2 )}$$
Assume that the amplifier gain (<span class="fontCss">K</span>) is varied from 0 to 50 (We assume that the value of gain <span class="fontCss">K</span> is nonnegative.). 
Indicate the value of the gain <span class="fontCss">K</span> for which the root locus crosses the imaginary axis. Plot the output response for <span class="fontCss">K</span> = 0.4, 2,
6 and 12 when the inputs are unit step and unit impulse.


<br/>
The characteristic equation of the system (considered in problem-2) is 
$$1 + K \ G_1(s) H(s) = 0 \tag{12}$$

The root locus is the path of the roots of characteristic equation traced out in s-plane as gain <span class="fontCss">K</span> is changed from 0 to &infin; and it is symmetrical about the real axis.
<br/>

<b>Construction of Root Locus when <span class="fontCss">K</span> &ge; 0 and the system is a negative feedback system</b><br/>
<b>Branch</b><br/>
The root locus branches start at the open loop poles and end at open loop zeros. So, the number of root locus branches <span class="fontCss">N</span> is equal to the number of finite open loop poles <span class="fontCss">P</span> or the number of finite open loop zeros <span class="fontCss">Z</span>, whichever is greater.

Mathematically, the number of root locus branches <span class="fontCss">N</span> can be written as

$$N = P \tag{13}$$

when 

$$P\geq Z$$

$$N = Z \tag{14}$$

when 

$$Z\gt P$$

<!-- If the angle of the open loop transfer function at a point is an odd multiple of 180&deg;, then that point is on the root locus.--> 
If odd number of open loop poles and zeros exist to	the left side of a point on the real axis, then that point is on the root locus branch.<br/><br/>

<b>Centroid (<i>&alpha;</i>)</b><br/>

$$\alpha = \frac{\sum{Real \ part \ of \ finite \ open \ loop \ poles} - \sum{Real \ part \ of \ finite \ open \ loop \ zeros}}{P - Z} \tag{15}$$

<b>Angle of asymptotes (<span class="fontCss">&theta;</span>)</b>

$$\theta = \frac{(2q + 1)180^\circ}{P - Z} \tag{16}$$

where <span class="fontCss3">q</span> = 0, 1, 2,...<span class="fontCss">(P-Z)</span>-1<br/>

<br/> <b>Break-away and Break-in points</b><br/>
If there exists a real axis root locus branch between two open loop poles, then there will be a break-away point in between these two open loop poles.
If there exists a real axis root locus branch between two open loop zeros, then there will be a break-in point in between these two open loop zeros.<br/>

<!-- Note : Break-away and break-in points exist only on the real axis root locus branches. -->
<br/>				

Steps to find break-away and break-in points<br/>

1) Write <span class="fontCss">K</span> in terms of s from the characteristic equation (equation 12).<br/>

2) Differentiate <span class="fontCss">K</span> with respect to s and make it equal to zero. Substitute these values of s in the above equation (found from step 1).<br/>

3) The values of s for which the <span class="fontCss">K</span> value is positive are the break points.

<br/><br/>

<b>Problem 3</b><br/>
Check the stability of the unity negative feedback system given in Fig.1. where,

$$G ( s ) = \frac{2}{s ( s + 1 )( s + 2 )}, \ H ( s ) = 1$$

by drawing the Bode and Nyquist diagrams and hence indicate gain margin, phase margin, gain crossover frequency, phase crossover frequency.
<br/><br/>
<!-- Nyquist plots are used to draw the complete frequency response of the open loop transfer function.<br/>

If <span class="fontCss">P</span> = Number of  open loop poles in the the right half of the s-plane and <span class="fontCss">Z</span> =  Number of  closed loop poles in the the right half of the s-plane then <br/>
the number of encirclements <span class="fontCss">N</span> can be written as,

$$N = P - Z \tag{14}$$

The open loop control system is stable if there is no open loop pole in the the right half of the s-plane.
$$P = 0 ; N = -Z$$

The closed loop control system is stable if there is no closed loop pole in the right half of the s-plane.
$$Z = 0 ; N = P$$


<b>General steps for drawing Nyquist plots</b><br/>

i) Locate the poles and zeros of open loop transfer function <span class="fontCss">G</span><span class="fontCss2">(s)</span><span class="fontCss">H</span><span class="fontCss2">(s)</span></span> in s plane.<br/>

ii)	Draw the polar plot by varying <span class="fontCss">&omega;</span> (angular frequency) from zero to infinity. If pole or zero present at s = 0, then varying <span class="fontCss">&omega;</span> from 0+ to infinity for drawing polar plot.<br/>

iii) Draw the mirror image of above polar plot for values of <span class="fontCss">&omega;</span> ranging from −&infin; to zero (0− if any pole or zero present at s = 0).<br/>

iv)	The infinite radius half circle will start at the point where the mirror image of the polar plot ends and this infinite radius half circle will end at the point where the polar plot starts.<br/>

v)	After drawing the Nyquist plot, we can find the stability of the closed loop control system using the Nyquist stability criterion.
If the critical point (-1+j0) lies outside the encirclement, then the closed loop control system is absolutely stable.<br/><br/> -->

<!--NEWLY ADDED THEORY ON NYQUIST PLOT FROM OGATA pp-451---->
<b>Nyquist Stability Criterion</b><br/>
This criterion can be expressed as<br/>

$$Z = N + P \tag{17}$$

where,<br/>
<span class="fontCss">Z</span> =  number of zeros of 1+<span class="fontCss">G</span><span class="fontCss2">(s)</span><span class="fontCss">H</span><span class="fontCss2">(s)</span> in the right-half <span class="fontCss2">s</span> plane<br/>
<span class="fontCss">N</span> =  number of clockwise encirclements of the –1+j0 point<br/>
<span class="fontCss">P</span> =  number of poles of <span class="fontCss">G</span><span class="fontCss2">(s)</span><span class="fontCss">H</span><span class="fontCss2">(s)</span> in the right-half <span class="fontCss2">s</span> plane
<br/><br/>
If <span class="fontCss">P</span> is not zero, for a stable control system, we must have <span class="fontCss">Z</span>=0,or <span class="fontCss">N</span>= – <span class="fontCss">P</span>, 
which means that we must have <span class="fontCss">P</span> counterclockwise encirclements of the –1+j0 point. If <span class="fontCss">G</span><span class="fontCss2">(s)</span><span class="fontCss">H</span><span class="fontCss2">(s)</span>
does not have any poles in the right-half <span class="fontCss2">s</span> plane, then <span class="fontCss">Z</span> = <span class="fontCss">N</span>. Thus, for stability there must be no encirclement of the –1+j0 point by the 
<span class="fontCss">G</span><span class="fontCss2">(j&omega;)</span><span class="fontCss">H</span><span class="fontCss2">(j&omega;)</span> locus.<br/><br/>

The stability of such a system can be determined by seeing if the –1 + j0 point is enclosed by the Nyquist plot of <span class="fontCss">G</span><span class="fontCss2">(j&omega;)</span><span class="fontCss">H</span><span class="fontCss2">(j&omega;)</span>.
Let us assume the region enclosed by a Nyquist plot, shown in Fig. 3. For stability, the –1 + j0 point must lie outside the shaded region.<br/><br/>

<div align="center">				
<img alt="" src="./images/ogataN.png" class="img-fluid"><br/><br/>
<b>Fig. 3. Region enclosed by a Nyquist plot</b>
</div><br/>



<!----CAN BE ADDED SOME NOTES IF REQUIRED LIKE STEPS TO DRAW NYQUIST--------->




<b>Stability Analysis using Nyquist Plots </b><br/>
From the Nyquist plots, we can identify whether the control system is stable, marginally stable or unstable based on the values of the following parameters.<br/>

Gain crossover frequency (<span class="fontCss">&omega;<sub>gc</sub></span>) and phase crossover frequency (<span class="fontCss">&omega;<sub>pc</sub></span>).<br/>
Gain margin (GM) and phase margin (PM)<br/><br/>

<b>Phase crossover frequency (<span class="fontCss">&omega;<sub>pc</sub></span>)</b><br/>
The frequency at which the Nyquist plot intersects the negative real axis (phase angle is 180&deg;) is known as the phase crossover frequency. It is denoted by <span class="fontCss">&omega;<sub>pc</sub></span>.<br/><br/>


<b>Gain crossover frequency (<span class="fontCss">&omega;<sub>gc</sub></span>)</b><br/>
The frequency at which the Nyquist plot is having the magnitude of one is known as the gain crossover frequency. It is denoted by <span class="fontCss">&omega;<sub>gc</sub></span>.<br/><br/>


The stability of the control system based on the relation between phase crossover frequency and gain crossover frequency is discussed below (the 
open-loop transfer function is considered as minimum phase (in other words open-loop poles and zeros are in the left half of complex plane)).<br/><br/>

i) If the phase crossover frequency (<span class="fontCss">&omega;<sub>pc</sub></span>) is greater than the gain crossover frequency (<span class="fontCss">&omega;<sub>gc</sub></span>), then the system is stable.<br/>

ii) If the phase crossover frequency (<span class="fontCss">&omega;<sub>pc</sub></span>) is equal to the gain crossover frequency (<span class="fontCss">&omega;<sub>gc</sub></span>), then the system is marginally stable.<br/>

iii) If phase crossover frequency (<span class="fontCss">&omega;<sub>pc</sub></span>) is less than gain crossover frequency (<span class="fontCss">&omega;<sub>gc</sub></span>), then the system is unstable.<br/>

<br/><b>Gain Margin</b><br/>

The gain margin (GM) is equal to the reciprocal of the magnitude of the Nyquist plot at the phase crossover frequency.

$$GM = \frac{1}{M_{pc}} \tag{18}$$
where, M<sub>pc</sub> is the magnitude in normal scale at the phase crossover frequency.<br/>

<br/><b>Phase Margin</b><br/>
The phase margin (PM) is equal to the sum of 180&deg; and the phase angle at the gain crossover frequency.

$$PM = 180^\circ + \phi_{gc} \tag{19}$$
where, <span class="fontCss">&phi;<sub>gc</sub></span> is the phase angle at the gain crossover frequency.<br/><br/>

The stability of the control system based on the relation between the gain margin and the phase margin is discussed below (the 
open-loop transfer function is considered as minimum phase (in other words open-loop poles and zeros are in the left half of complex plane)).<br/><br/>

i) If the gain margin (GM) is greater than one and the phase margin (PM) is positive, then the control system is stable.<br/>

ii) If the gain margin (GM) is equal to one and the phase margin (PM) is zero degrees, then the control system is marginally stable.<br/>

iii) If the gain margin (GM) is less than one and / or the phase margin (PM) is negative, then the control system is unstable.<br/>

<br/><b>Bode Plot</b><br/>
The Bode plot or the Bode diagram consists of two plots :-<br/>

1. Magnitude plot<br/>
2. Phase plot<br/>

In both the plots, x-axis represents angular frequency (logarithmic scale). whereas, yaxis represents the magnitude (linear scale) of open loop transfer function in the magnitude plot and the phase angle (linear scale) of the open loop transfer function in the phase plot.

The magnitude of the open loop transfer function in dB is -

$$M = 20 \ log \ |G ( j \omega ) H ( j \omega )| \tag{20}$$

The phase angle of the open loop transfer function in degrees is -

$$\phi = \angle G ( j \omega ) H ( j \omega ) \tag{21}$$

Note − The base of logarithm is 10.

<br/><br/>
<b>Problem 4</b><br/>
Obtain the system response of a permanent magnet dc motor (Fig. 4) from the simulation model (Fig. 6). Observe speed of the motor (&omega;), armature current (<span class="fontCss">i</span><sub>a</sub>) and load torque (<span class="fontCss">T</span>).
Assume <span class="fontCss">J</span> is the inertia of the motor, <span class="fontCss">b</span> is the viscous friction coefficient, <span class="fontCss">V</span> is the supply voltage and motor is running without load.				


<div align="center">				
<img alt="" class="img-fluid" src="./images/pr4.png"><br/>
<b>Fig. 4. A shunt dc motor diagram</b>
</div><br>

where, <span class="fontCss3">&omega;</span> : Speed (rad/sec) of the motor.<br>
<span class="fontCss3">i<sub>a</sub></span> : Armature current (amp.)<br>				
<span class="fontCss">R<sub>a</sub></span> : Armature resistance (ohms)<br>
<span class="fontCss">L<sub>a</sub></span> : Armature inductance (henry)<br>
<span class="fontCss">T</span> : Load torque (newton-m)<br>
<span class="fontCss">V</span> : Supply voltage (volts)<br>

<!-- <b>DC Motor model</b><br>

Let us assume a general schematic diagram of a dc motor, shown in Fig. 5. Assume the following notations are used.<br/>
<div align="center">				
<img alt="" class="img-fluid" src="./images/dc.png" ><br/>
<b>Fig. 5. Schematic diagram of dc motor</b>
</div><br/>

<span class="fontCss3">e<sub>a</sub></span> : Armature voltage (volts)<br>
<span class="fontCss3">i<sub>a</sub></span> : Armature current (amp.)<br>
<span class="fontCss">R<sub>a</sub></span> : Armature resistance (ohms)<br>
<span class="fontCss">L<sub>a</sub></span> : Armature inductance (henry)<br>
<span class="fontCss3">e<sub>b</sub></span> : Back emf (volts)<br>
<span class="fontCss3">i<sub>f</sub></span> : Field current (amp.)<br>
<span class="fontCss">T<sub>M</sub></span> : Motor torque (newton-m)<br>
<span class="fontCss">T<sub>L</sub></span> : Load torque (newton-m)<br>
<span class="fontCss">&omega;</span> : Speed (rad/sec)<br>
<span class="fontCss">J</span> : Moment of inertia of the rotor (newton-m/rad/sec<sup>2</sup>)<br>
<span class="fontCss">B</span> : Viscous friction coefficient (newton-m/rad/sec)<br>
<span class="fontCss">K<sub>T</sub></span> : Torque constant<br>
<span class="fontCss">K<sub>b</sub></span> : Back emf constant<br>


<br/> Upper case notations <span class="fontCss">E<sub>a</sub>, I<sub>a</sub>, E<sub>b</sub>, I<sub>f</sub></span>
are used for steady state values of the respective
variables <span class="fontCss3">e<sub>a</sub>, i<sub>a</sub>, e<sub>b</sub></span> and <span class="fontCss2">i<sub>f</sub></span>				
<br>
In the present setup a permanent magnet dc motor is used, the field winding is thus absent and the air gap flux is constant. 
The input drive may therefore be applied to the armature only, i.e. only armature controlled operation is possible.
The mathematical equations in this operating mode are, 

$$T_{M} = K_{T} I_a \tag{22}$$

$$e_{b} = K_{b} \omega \tag{23}$$

Armature circuit model

$$L_a\frac{di_a}{dt} + R_a i_a + e_b = e_a \tag{24}$$

Mechanical model

$$J\frac{d\omega}{dt} + B\omega + T_L = T_M \tag{25}$$

Taking Laplace Transform of (24) and (25),

$$\frac{\omega(s)}{E_a(s)} = \frac{K_T}{(sL_a + R_a)(sJ + B) + K_T K_b} \tag{26}$$

Assuming the inductance of the armature circuit to be very small, the motor transfer function may be written as, 

$$G_M(s) = \frac{\omega(s)}{E_a(s)} = \frac{K_T/R_a}{Js + B + \frac{K_T K_b}{R_a}} = \frac{K_M}{s\tau_m + 1}   \tag{27}$$

Motor gain constant (<span class="fontCss">K<sub>M</sub></span>)

$$K_M = \frac{K_T}{R_a B + K_T K_b}$$

Motor time constant (<span class="fontCss3">&tau;<sub>m</sub></span>)

$$\tau_m = \frac{R_a J}{R_a B + K_T K_b}$$


The armature controlled motor therefore has a first order type-0 transfer function and the two constant <span class="fontCss">K<sub>M</sub></span> and <span class="fontCss3">&tau;<sub>m</sub></span>
depend upon motor parameters.<br/><br/> -->

<b>DC motor simulation model</b><br/>
<div align="center">				
<img alt="" class="img-fluid" src="./images/dc3.png" ><br/>
<b>Fig. 6. Simulation model of dc motor</b>
</div><br/>


<b>Dynamic equations:</b><br/>

Mechanical part:

$$J \dot{\omega} = T_r - b \omega - T \tag{22}$$

Eletrical part:

$$V = L_a i_a + R_a i_a + E_b \tag{23}$$

<span class="fontCss3">i<sub>a</sub></span> : Armature current (amp.)<br>
<span class="fontCss">R<sub>a</sub></span> : Armature resistance (ohms)<br>
<span class="fontCss">L<sub>a</sub></span> : Armature inductance (henry)<br>
<span class="fontCss">T</span> : Load torque (newton-m)<br>
<span class="fontCss3">&omega;</span> : Speed (rad/sec)<br>
<span class="fontCss">L<sub>a</sub></span> : Armature inductance (henry)<br>
<span class="fontCss">V</span> : Supply voltage (volts)<br>
<span class="fontCss">J</span> :Inertia of the motor (kgm<sup>2</sup>)<br/>


<span class="fontCss">T<sub>r</sub></span> = developed torque = <span class="fontCss">K</span> <span class="fontCss3">i<sub>a</sub></span>, <span class="fontCss">K</span> = Torque constant<br/>
<span class="fontCss">E<sub>b</sub></span> = <span class="fontCss">K<sub>e</sub></span> <span class="fontCss3">&omega;</span> = back e.m.f, <span class="fontCss">K<sub>e</sub></span> = back e.m.f constant,
<span class="fontCss3">b</span> : Viscous friction coefficient.<br>


Most DC motors have a negligible <span class="fontCss">L<sub>a</sub></span> such that <span class="fontCss">L<sub>a</sub></span> = 0. After eliminating internal variables <span class="fontCss">T<sub>r</sub></span>
and <span class="fontCss">E<sub>b</sub></span> the following equations can be obtained.

$$i_a = \frac{1}{R_a} V - \frac{K_e}{R_a} \omega = A_u V - A_0 \omega \tag{24}$$

$$\dot{\omega} = \frac{K}{J} i_a - \frac{b}{J} \omega - \frac{1}{J} T \tag{25}$$

$$\dot{\omega} = B_i i_a - B_0 \omega - B_T T \tag{26}$$

The parameters are given below:<br/>

<span class="fontCss">K</span> = 0.015 newton-m/A, <span class="fontCss">K<sub>e</sub></span> = 0.066 V s/rad, <span class="fontCss">R<sub>a</sub></span> = 3.3 &ohm;, 
<span class="fontCss3">b</span> = 0 and <span class="fontCss">J</span> = 30 &times; 10<sup>-6</sup> kgm<sup>2</sup>
such that <span class="fontCss">A<sub>u</sub></span> = 0.303, <span class="fontCss">A</span><span class="fontCss2"><sub>0</sub></span> = 0.02, <span class="fontCss">B<sub>i</sub></span> = 500, 
<span class="fontCss">B</span><span class="fontCss2"><sub>0</sub></span> = 0 and 
<span class="fontCss">B<sub>T</sub></span> = 33333.

The motor assumed supplied from a voltage source, modeled by the following equation

$$V = V_s - R_s i_a \tag{27}$$

where <span class="fontCss">V<sub>s</sub></span> = 10 V and <span class="fontCss">R<sub>s</sub></span> = 0.3 &ohm;. The load is assumed a pure viscous load, represented by a load torque equation

$$T = B_L \omega \tag{28}$$

<span class="fontCss">B<sub>L</sub></span> = 0.00001 Nms/rad.


<link href="./simulation/css/cs.css" rel="stylesheet">			    
						
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>								
