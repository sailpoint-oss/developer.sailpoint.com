---
id: zero-knowledge-encryption
title: Zero Knowledge Encryption
pagination_label: Zero Knowledge Encryption
sidebar_label: Zero Knowledge Encryption
sidebar_position: 7
sidebar_class_name: zeroKnowledgeEncryption
keywords: ['connectivity', 'connector', 'encryption']
description: Protect sensitive data with zero knowledge encryption.
slug: /connectivity/saas-connectivity/zero-knowledge-encryption
tags: ['Connectivity']
---

## Protecting Sensitive Data with Zero Knowledge Encryption

Organizations are rapidly adopting cloud-delivered software, or SaaS, which often uses sensitive user data such as account credentials. 
This data is often sent across the Internet and potentially stored in databases and directories that may not be under the direct control of the company’s IT department. 
Many enterprises take advantage of SailPoint Identity Security Cloud (ISC) to govern access, enhance productivity, and automate IT processes across both cloud and on-premises resources. 
Protecting this sensitive data is paramount, so SailPoint handles it with the utmost commitment. 

Passwords are a ubiquitous, time-honored method of securing access to critical data. 
Even more important than user passwords are administrative account credentials, which allow privileged access to systems. 
Today’s enterprises use additional measures like security questions, which are equally as important to protect as passwords. 
ISC secures all credentials and sensitive identity data while at rest and in motion. SailPoint’s solution for securing sensitive data is built upon two tenets:

1. All sensitive data must be protected by at least two layers of encryption, and those two layers must be dissimilar so if one is compromised, the other cannot be compromised the same way. 
For example, encrypt credentials using 2048-bit RSA encryption, and then use Transport Layer Security (TLS) to encrypt the encrypted credentials while in motion.

2. SailPoint never has access to the unencrypted form of sensitive data. It is always encrypted with a key that is controlled by the user or customer and is not accessible to SailPoint. 
The key is always kept separate from the encrypted data. 
ISC delivers this level of security using a scalable and redundant architecture that, unlike many other solutions in the market, does not rely on using agents or opening the corporate firewall, and never exposes sensitive data to attack.

## Patented Zero Knowledge Encryption

IT organizations traditionally employ security measures to protect their networks such as firewalls and intrusion detection and prevention systems. 
SailPoint’s *Zero Knowledge Encryption* (US Patents 9319395, 9722980, 10277566) secures administrative credentials in a way that is protected from breach, without impairing the effectiveness of these systems.

SailPoint's *Zero Knowledge Encryption* always meets these standards: 

- SailPoint never has access to any administrative password required for servicing accounts.
- Credentials are never sent over the internet, and they are never stored.
- All passwords are encrypted with encryption keys that are only known to the customer and can never be decrypted without the customer-owned key.
- All passwords are always encrypted a second time using a different encryption technique or technology, making a breach of credentials nearly impossible. 
Since unencrypted credentials are never stored or sent over the internet, they are not vulnerable to attack.

## SailPoint Virtual Appliance

*Zero Knowledge Encryption* uses the SailPoint virtual appliance (VA) to provide a secure, scalable, and redundant interface to both on-premises and cloud resources. 
VAs are deployed in clusters behind the firewall of the enterprise datacenter without requiring ports to be opened, so the enterprise’s intrusion prevention and network security perimeter enforcement remains intact. 
The VA continuously polls ISC in the cloud, looking for tasks or for data that is waiting for action. 
The VA is scalable, highly-available, and because it's completely self-managed and updates automatically, it adds no administrative overhead. 
The company administrator specifies a passphrase that is unknown to SailPoint, which is used to generate a 2048-bit RSA public/private key pair. 
The VA then serves the public key that ISC uses to encrypt account credentials. 
This ensures that any credential exchange with systems that require administrative access are securely encrypted using a user-specified key that is not known to SailPoint, not stored on any SailPoint server, and is created and maintained within the enterprise security perimeter or firewall. 
The user-specified keys are then managed and rotated according to the administrator’s security policy.

This is the SailPoint VA configuration:

![SailPoint VA Configuration](./img/Solution_Brief_ZKE_Figure1.png)

This is the process SailPoint uses to secure service account credentials with the SailPoint VA:

![Securing Service Account Credentials](./img/Solution_Brief_ZKE_Figure2.png)

The first VA within a cluster generates an RSA 2048-bit encryption key that is unique to that cluster. 
Additionally, multiple clusters can be deployed, each with its own unique admin-assigned passphrase and encryption key. 
Multiple vaS may be deployed in each cluster to add horizontal scalability, redundancy, and load-balancing capacity to enterprise-scale deployments. 
Multiple clusters may be deployed to meet the distributed needs of an organization’s particular security model, such as deploying VAs in datacenters, whether they reside on-premises or are hosted in the cloud to communicate with SaaS systems. 
VA clusters can be deployed within each datacenter or geography to keep security zones compartmentalized.

## Securing Sensitive Enterprise Data

Sensitive data in the enterprise is not limited to administrative credentials. 
It is common for other critical information and credentials to be used as well, and their usage is not always obvious. ISC ensures this data is always secure.

### Identity Security Cloud Login and Authentication Information

SailPoint uses *Zero Knowledge Encryption* along with multiple layers of encryption for authentication in ISC. 
The specific methods of encryption are tailored for whichever authentication method is chosen by the administrator.

#### Identity Security Cloud Password

When an ISC user creates their password, an SHA-256 hash is calculated, using a salt that itself is an SHA-256 hash of a random string. 
This creates a cryptographic representation of the password that is then sent to ISC over a secure TLS connection, giving two layers of encryption. 
It's the SHA-256 one-way cryptographic hash that is stored, not the plain-text password. 

Whenever the user signs in to ISC using their password on subsequent logins, this one-way hash is generated anew, authenticating the user into ISC based on the hash value.

#### Pass-Through Authentication

Pass-through authentication allows ISC users to authenticate using a trusted source of authentication, such as the company’s Active Directory server. 
When a pass-through authentication user creates or changes their password, ISC uses *Zero Knowledge Encryption* to encrypt the new password in the browser using the 2048-bit RSA public key hosted by the virtual appliance. 
Inside the company’s firewall, the VA derives the password, using the 2048-bit RSA private key, and sets the password on the target system, without any chance of its being known outside the company’s network.

When the user signs in to ISC in the future, this 2048-bit encrypted representation of the password is sent to the VA where the target system password is derived, within the customer’s firewall. 
The target authentication system must then validate the user’s credentials.

#### Security Questions

Most enterprises use security questions to provide strong authentication, such as validating the user’s identity for password changes or enabling access to higher security systems. 
In ISC, the answers to users’ security questions are encrypted using SHA-256 to create a one-way hash, using a salt that includes a random string and the user’s Universally Unique Identifier (UUID). 
This makes the answers to the user’s security questions virtually impossible to hack. 
All of this is sent over TLS, providing at least two layers of encryption at all times.

### Third-Party Authentication

Many enterprises employ access management tools known as “Identity Providers” (or IdPs) to facilitate single sign-on and other features like self-service password reset for the applications and systems they use within their enterprise, multi-factor authentication, mobile device management and the like. 
Because ISC enables many access-oriented actions for signed-in users, it becomes critical to understand how those users can be signed in to ISC.

When a user is signing in to ISC from a third-party SSO tool, the security of the credentials used for this sign-in depends on the protocols or methods that SSO tool uses. 
There are two methods of single sign-on in common use in the industry: credential replay and federation.

#### Credential Replay

With credential replay, the SSO tool automatically fills in the sign-in page username and password fields with a stored username and password when it's performing single sign-on. 
To ensure that credentials cannot be compromised during credential replay, it's critical that you thoroughly evaluate how your SSO provider stores credentials and secures them when it's replaying into ISC. 
Because these methods vary and don't conform to a recognized standard, credential replay for signing in to ISC is not the preferred method of single sign-on.

#### Federation

Federation using Security Assertion Markup Language (SAML) is the industry-standard secure method for single sign-on and most enterprise-grade SSO products support it. 
With SAML, no password is used for signing in, and a password doesn't have to be stored by the SSO vendor. 
Because no credentials exist either at rest or in motion, SAML is very secure and has proven nearly impossible to hack. 
ISC fully supports SAML for federated logins, which enables integration with the best in class access management products without putting critical credentials at risk.

### Secure Password Management

When the user updates a password on a target application through ISC, they must use the administrative credentials for that target system or directory to set the new password. 
ISC uses *Zero Knowledge Encryption* through the SailPoint VA to secure these sensitive administrative credentials. 
Also, the new password itself is first encrypted prior to transmission to the target system, and a second form of encryption is applied while the new password is in motion or at rest.

### Automated Task Authentication

ISC implements *Zero Knowledge Encryption* within the SailPoint virtual appliance to secure all these administrative actions that are used by automated tasks within the governance platform:

- **Account Aggregation** – ISC uses administrative credentials to learn about accounts on diverse types of connected systems.
- **User Provisioning** – ISC uses administrative account access to external systems to provision accounts, set entitlements, lock and unlock or enable and disable accounts, assign groups, and perform other actions on those systems.
- **Password Management** – Changing and updating passwords on external systems requires ISC to sign in to those systems with administrative access.
- **Access Certifications** – Remediation activity from an access certification is a provisioning action that uses administrative access to the target system.

All these automated tasks, and any other administrative action ISC takes as a part of the service of governance, are all secured using *Zero Knowledge Encryption* through the VA.

## Conclusion

With a range of technologies including the patented *Zero Knowledge Encryption*, SailPoint shows its commitment to security with continuous innovation, creating the best-in-class security in their cloud governance platform. 
Identity Security Cloud builds upon decades of enterprise security best practices, and unlike other vendors, does not require customers to change their firewall or intrusion protection practices. 
The powerful combination of multiple encryption technologies ensures sensitive data is always protected with the most advanced technology available, securing your organization’s adoption of cloud technologies today and into the future.

© 2024 SailPoint Technologies, Inc. All rights reserved. SailPoint, the SailPoint logo and all techniques are trademarks or registered trademarks of SailPoint Technologies, Inc. in the U.S. and/or other countries. All other products or services are trademarks of their respective companies.