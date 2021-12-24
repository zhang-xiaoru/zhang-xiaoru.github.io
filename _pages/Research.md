---
layout: archive
title: ""
permalink: /Research/
author_profile: True
---


Xi'an Jiaotong University
===

---------------------

Optical Vortex and Vector Vortex
---
Photons have orbital angular momentum (OAM) and spin angular momentum (SAM). While spin angular momentum of light is related to its polarization state, its orbital angular momentum is linked to the spatial phase distribution. An important feature of light field with OAM is the helical phase distribution of the wavefront, so OAM light is also referred to as optical vortex. Compared to the OAM light field with uniform polarization distribution, the vector beam or vector vortex has more complex properties. It combines the orbital and spin angular momentum of light. For a vector beam, the polarization state is classically entangled with the OAM state, and this entanglement is reflected in the inhomogeneous paranormal distribution of the wavefront. Cylindrical vector beam (CVB), whose polarization distribution is polarly symmetrized, is of great significance in various fields such as superresolution imaging, optical-trapping, and quantum information science.

**Spiral wavefront of OAM light** (*Light: Science & Applications. 8, 90 (2019)*)

<img src="/images/OAM_demo.png" alt="OAM_demo.png" style="zoom:75%;" />

Rotational Doppler Effect
---
When an OAM light illuminates a spinning object with angular velocity $\omega$, the reflected light will carry a frequency shift proportionate to the variation of topological charge. RDE can be observed in both monochromatic light and white light and enables plentiful application in the detection of spinning objects. RDE also possesses potential in analyzing the OAM spectrum. The OAM spectrum analyzer can deduct a full parametric description based on an optical beating signal.

**Frequency shift as the result of rotational Doppler effect**(*Light: Science & Application. 6, e16251 (2017)*)

<img src="/images/RDE_demo.png" alt="RDE_demo.png" style="zoom:50%;" />

Mode detection and demultiplexing scheme of vector beam based on RDE
---
When considering the rotational Dopper effect of CVBs, the fact that CVB consists of two different OAM modes will induce a beating frequency in the collected intensity. Different modes in the scattered light are orthogonal to each other so that the beating effect only occurs within the same OAM basis. Such properties ensure that the beating frequency is proportional to the TC of the incident CVB. If we collected the intensity of the fundamental mode of scattering light (TC=0), the visibility and initial phase of intensity variation will be regulated by the phase parameter of CVB. Phase analysis is also introduced to distinguish two CVBs with opposite TCs, which are usually degenerated in the beating frequency. Such properties can be applied in quantitative, complete, and simultaneous detection of CVB. 

**Phase shift in intensity for two CVB modes with opposite topological charge**

<img src="/images/deg_demo.jpg" alt="deg_demo.jpg" style="zoom:35%" />


One important application of CVB is mode-division multiplexing (MDM), where multiple orthogonal CVB modes are used as information carriers. Thus, demultiplexing of multi-mode CVB has become an interesting topic. When a multi-mode vector beam illuminates the spinning object, the correspondence between beating signals and mode spectrum is no longer one-to-one due to the presence of cross-beating between different modes. Using a rotating object whose harmonic components form an orthogonal relationship with the radial amplitude distribution of the incident beam, the effect of cross-terms is reduced. The phase of the intensity difference between the horizontal and vertical polarization of the dispersed light is used to demultiplex two degenerate modes. 

**Beating signal for superimposed CVB modes of $\ell=1$ and $\ell=2$**

<img src="/images/multi-demo.jpg" alt="multi-demo.jpg" style="zoom:35%" />

Texas A&M University
===

-----------------------------------

Quantum teleportation
---
As one important application of entanglement, quantum teleportation enables the transmission of an unknown quantum state from one point to another, these points possibly being widely separated. The teleportation procedure of a general one qubit state requires the sender Bob and receiver Alice to share an entangled state. After Bob performs her projective measurement onto the Bell basis, Alice's state will be determined accordingly. The classical channel is also necessary for Bob to reproduce the teleported state. 


Direct secure quantum communication
---
Quantum key distribution (QKD), ever since it was first proposed by Bennett and Brassard in the famous BB84 protocol, has developed fast both theoretically and experimentally. To complete the secure communication, the sender Bob must encrypt his message with a random key transmitted through a quantum channel between Alice and Bob. Besides key distribution, a new class of quantum communication protocol called direct secure quantum communication (DSQC) has been proposed, where the message is deterministically sent through a quantum channel. In 2004, Yan et al. (*Eur. Phys. J. B. 41, 75 (2004)*) proposed a direct secure communication using EPR pairs and quantum teleportation. In this deterministic scheme, the sender Bob uses a particle sequence to represent his message. Bob then uses an EPR pair shared with Alice to teleport his message. Such scheme is completely secure for direct communication, for there is no transmission of qubits that carries information. 

Simplified direct secure communication
---
In Yan's direct communication protocol, the binary code in the transmitted message is represented by the superimposed states of $|0\rangle$ and $|1\rangle$. Similar to quantum teleportation, Alice needs to perform a unitary transformation on her state before she can read out the message. If the message is encoded through the direct mapping between $\{0,1\}$ and $\{|0\rangle\}$ instead, then Alice can receive the information without using the unitary operation to recover the state of Bob. Moreover, if Alice and Bob initially share generalized Bell state as entangled particles, this simplified procedure can be generalized to the N-qubit case. Alice and Bob no longer share an entangled state after the teleportation procedure, and Bob must send another entangled pair to Alice to start the next transmission cycle. Thus, the transmission efficiency is improved if multi-qubit teleportation is applied. 

