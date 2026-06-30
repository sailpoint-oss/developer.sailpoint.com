---
id: v1-managedcluster
title: Managedcluster
pagination_label: Managedcluster
sidebar_label: Managedcluster
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Managedcluster', 'V1Managedcluster'] 
slug: /tools/sdk/go/managedclusters/models/managedcluster
tags: ['SDK', 'Software Development Kit', 'Managedcluster', 'V1Managedcluster']
---

# Managedcluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ManagedCluster ID | 
**Name** | Pointer to **string** | ManagedCluster name | [optional] 
**Pod** | Pointer to **string** | ManagedCluster pod | [optional] 
**Org** | Pointer to **string** | ManagedCluster org | [optional] 
**Type** | Pointer to [**Managedclustertypes**](managedclustertypes) |  | [optional] 
**Configuration** | Pointer to **map[string]string** | ManagedProcess configuration map | [optional] 
**KeyPair** | Pointer to [**Managedclusterkeypair**](managedclusterkeypair) |  | [optional] 
**Attributes** | Pointer to [**Managedclusterattributes**](managedclusterattributes) |  | [optional] 
**Description** | Pointer to **string** | ManagedCluster description | [optional] [default to "q"]
**Redis** | Pointer to [**Managedclusterredis**](managedclusterredis) |  | [optional] 
**ClientType** | [**NullableManagedclienttype**](managedclienttype) |  | 
**CcgVersion** | **string** | CCG version used by the ManagedCluster | 
**PinnedConfig** | Pointer to **bool** | boolean flag indicating whether or not the cluster configuration is pinned | [optional] [default to false]
**LogConfiguration** | Pointer to [**NullableClientlogconfiguration**](clientlogconfiguration) |  | [optional] 
**Operational** | Pointer to **bool** | Whether or not the cluster is operational or not | [optional] [default to false]
**Status** | Pointer to **string** | Cluster status | [optional] 
**PublicKeyCertificate** | Pointer to **NullableString** | Public key certificate | [optional] 
**PublicKeyThumbprint** | Pointer to **NullableString** | Public key thumbprint | [optional] 
**PublicKey** | Pointer to **NullableString** | Public key | [optional] 
**EncryptionConfiguration** | Pointer to [**Managedclusterencryptionconfig**](managedclusterencryptionconfig) |  | [optional] 
**AlertKey** | Pointer to **string** | Key describing any immediate cluster alerts | [optional] 
**ClientIds** | Pointer to **[]string** | List of clients in a cluster | [optional] 
**ServiceCount** | Pointer to **int32** | Number of services bound to a cluster | [optional] [default to 0]
**CcId** | Pointer to **string** | CC ID only used in calling CC, will be removed without notice when Migration to CEGS is finished | [optional] [default to "0"]
**CreatedAt** | Pointer to **NullableTime** | The date/time this cluster was created | [optional] 
**UpdatedAt** | Pointer to **NullableTime** | The date/time this cluster was last updated | [optional] 
**LastReleaseNotifiedAt** | Pointer to **NullableTime** | The date/time this cluster was notified for the last release | [optional] 
**UpdatePreferences** | Pointer to [**ManagedclusterUpdatePreferences**](managedcluster-update-preferences) |  | [optional] 
**CurrentInstalledReleaseVersion** | Pointer to **NullableString** | The current installed release on the Managed cluster | [optional] 
**UpdatePackage** | Pointer to **NullableString** | New available updates for the Managed cluster | [optional] 
**IsOutOfDateNotifiedAt** | Pointer to **NullableTime** | The time at which out of date notification was sent for the Managed cluster | [optional] 
**ConsolidatedHealthIndicatorsStatus** | Pointer to **NullableString** | The consolidated Health Status for the Managed cluster | [optional] 

## Methods

### NewManagedcluster

`func NewManagedcluster(id string, clientType NullableManagedclienttype, ccgVersion string, ) *Managedcluster`

NewManagedcluster instantiates a new Managedcluster object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclusterWithDefaults

`func NewManagedclusterWithDefaults() *Managedcluster`

NewManagedclusterWithDefaults instantiates a new Managedcluster object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Managedcluster) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Managedcluster) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Managedcluster) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Managedcluster) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Managedcluster) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Managedcluster) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Managedcluster) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPod

`func (o *Managedcluster) GetPod() string`

GetPod returns the Pod field if non-nil, zero value otherwise.

### GetPodOk

`func (o *Managedcluster) GetPodOk() (*string, bool)`

GetPodOk returns a tuple with the Pod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPod

`func (o *Managedcluster) SetPod(v string)`

SetPod sets Pod field to given value.

### HasPod

`func (o *Managedcluster) HasPod() bool`

HasPod returns a boolean if a field has been set.

### GetOrg

`func (o *Managedcluster) GetOrg() string`

GetOrg returns the Org field if non-nil, zero value otherwise.

### GetOrgOk

`func (o *Managedcluster) GetOrgOk() (*string, bool)`

GetOrgOk returns a tuple with the Org field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrg

`func (o *Managedcluster) SetOrg(v string)`

SetOrg sets Org field to given value.

### HasOrg

`func (o *Managedcluster) HasOrg() bool`

HasOrg returns a boolean if a field has been set.

### GetType

`func (o *Managedcluster) GetType() Managedclustertypes`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Managedcluster) GetTypeOk() (*Managedclustertypes, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Managedcluster) SetType(v Managedclustertypes)`

SetType sets Type field to given value.

### HasType

`func (o *Managedcluster) HasType() bool`

HasType returns a boolean if a field has been set.

### GetConfiguration

`func (o *Managedcluster) GetConfiguration() map[string]string`

GetConfiguration returns the Configuration field if non-nil, zero value otherwise.

### GetConfigurationOk

`func (o *Managedcluster) GetConfigurationOk() (*map[string]string, bool)`

GetConfigurationOk returns a tuple with the Configuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfiguration

`func (o *Managedcluster) SetConfiguration(v map[string]string)`

SetConfiguration sets Configuration field to given value.

### HasConfiguration

`func (o *Managedcluster) HasConfiguration() bool`

HasConfiguration returns a boolean if a field has been set.

### GetKeyPair

`func (o *Managedcluster) GetKeyPair() Managedclusterkeypair`

GetKeyPair returns the KeyPair field if non-nil, zero value otherwise.

### GetKeyPairOk

`func (o *Managedcluster) GetKeyPairOk() (*Managedclusterkeypair, bool)`

GetKeyPairOk returns a tuple with the KeyPair field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyPair

`func (o *Managedcluster) SetKeyPair(v Managedclusterkeypair)`

SetKeyPair sets KeyPair field to given value.

### HasKeyPair

`func (o *Managedcluster) HasKeyPair() bool`

HasKeyPair returns a boolean if a field has been set.

### GetAttributes

`func (o *Managedcluster) GetAttributes() Managedclusterattributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Managedcluster) GetAttributesOk() (*Managedclusterattributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Managedcluster) SetAttributes(v Managedclusterattributes)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Managedcluster) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetDescription

`func (o *Managedcluster) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Managedcluster) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Managedcluster) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Managedcluster) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRedis

`func (o *Managedcluster) GetRedis() Managedclusterredis`

GetRedis returns the Redis field if non-nil, zero value otherwise.

### GetRedisOk

`func (o *Managedcluster) GetRedisOk() (*Managedclusterredis, bool)`

GetRedisOk returns a tuple with the Redis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedis

`func (o *Managedcluster) SetRedis(v Managedclusterredis)`

SetRedis sets Redis field to given value.

### HasRedis

`func (o *Managedcluster) HasRedis() bool`

HasRedis returns a boolean if a field has been set.

### GetClientType

`func (o *Managedcluster) GetClientType() Managedclienttype`

GetClientType returns the ClientType field if non-nil, zero value otherwise.

### GetClientTypeOk

`func (o *Managedcluster) GetClientTypeOk() (*Managedclienttype, bool)`

GetClientTypeOk returns a tuple with the ClientType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientType

`func (o *Managedcluster) SetClientType(v Managedclienttype)`

SetClientType sets ClientType field to given value.


### SetClientTypeNil

`func (o *Managedcluster) SetClientTypeNil(b bool)`

 SetClientTypeNil sets the value for ClientType to be an explicit nil

### UnsetClientType
`func (o *Managedcluster) UnsetClientType()`

UnsetClientType ensures that no value is present for ClientType, not even an explicit nil
### GetCcgVersion

`func (o *Managedcluster) GetCcgVersion() string`

GetCcgVersion returns the CcgVersion field if non-nil, zero value otherwise.

### GetCcgVersionOk

`func (o *Managedcluster) GetCcgVersionOk() (*string, bool)`

GetCcgVersionOk returns a tuple with the CcgVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcgVersion

`func (o *Managedcluster) SetCcgVersion(v string)`

SetCcgVersion sets CcgVersion field to given value.


### GetPinnedConfig

`func (o *Managedcluster) GetPinnedConfig() bool`

GetPinnedConfig returns the PinnedConfig field if non-nil, zero value otherwise.

### GetPinnedConfigOk

`func (o *Managedcluster) GetPinnedConfigOk() (*bool, bool)`

GetPinnedConfigOk returns a tuple with the PinnedConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPinnedConfig

`func (o *Managedcluster) SetPinnedConfig(v bool)`

SetPinnedConfig sets PinnedConfig field to given value.

### HasPinnedConfig

`func (o *Managedcluster) HasPinnedConfig() bool`

HasPinnedConfig returns a boolean if a field has been set.

### GetLogConfiguration

`func (o *Managedcluster) GetLogConfiguration() Clientlogconfiguration`

GetLogConfiguration returns the LogConfiguration field if non-nil, zero value otherwise.

### GetLogConfigurationOk

`func (o *Managedcluster) GetLogConfigurationOk() (*Clientlogconfiguration, bool)`

GetLogConfigurationOk returns a tuple with the LogConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogConfiguration

`func (o *Managedcluster) SetLogConfiguration(v Clientlogconfiguration)`

SetLogConfiguration sets LogConfiguration field to given value.

### HasLogConfiguration

`func (o *Managedcluster) HasLogConfiguration() bool`

HasLogConfiguration returns a boolean if a field has been set.

### SetLogConfigurationNil

`func (o *Managedcluster) SetLogConfigurationNil(b bool)`

 SetLogConfigurationNil sets the value for LogConfiguration to be an explicit nil

### UnsetLogConfiguration
`func (o *Managedcluster) UnsetLogConfiguration()`

UnsetLogConfiguration ensures that no value is present for LogConfiguration, not even an explicit nil
### GetOperational

`func (o *Managedcluster) GetOperational() bool`

GetOperational returns the Operational field if non-nil, zero value otherwise.

### GetOperationalOk

`func (o *Managedcluster) GetOperationalOk() (*bool, bool)`

GetOperationalOk returns a tuple with the Operational field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperational

`func (o *Managedcluster) SetOperational(v bool)`

SetOperational sets Operational field to given value.

### HasOperational

`func (o *Managedcluster) HasOperational() bool`

HasOperational returns a boolean if a field has been set.

### GetStatus

`func (o *Managedcluster) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Managedcluster) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Managedcluster) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Managedcluster) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetPublicKeyCertificate

`func (o *Managedcluster) GetPublicKeyCertificate() string`

GetPublicKeyCertificate returns the PublicKeyCertificate field if non-nil, zero value otherwise.

### GetPublicKeyCertificateOk

`func (o *Managedcluster) GetPublicKeyCertificateOk() (*string, bool)`

GetPublicKeyCertificateOk returns a tuple with the PublicKeyCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKeyCertificate

`func (o *Managedcluster) SetPublicKeyCertificate(v string)`

SetPublicKeyCertificate sets PublicKeyCertificate field to given value.

### HasPublicKeyCertificate

`func (o *Managedcluster) HasPublicKeyCertificate() bool`

HasPublicKeyCertificate returns a boolean if a field has been set.

### SetPublicKeyCertificateNil

`func (o *Managedcluster) SetPublicKeyCertificateNil(b bool)`

 SetPublicKeyCertificateNil sets the value for PublicKeyCertificate to be an explicit nil

### UnsetPublicKeyCertificate
`func (o *Managedcluster) UnsetPublicKeyCertificate()`

UnsetPublicKeyCertificate ensures that no value is present for PublicKeyCertificate, not even an explicit nil
### GetPublicKeyThumbprint

`func (o *Managedcluster) GetPublicKeyThumbprint() string`

GetPublicKeyThumbprint returns the PublicKeyThumbprint field if non-nil, zero value otherwise.

### GetPublicKeyThumbprintOk

`func (o *Managedcluster) GetPublicKeyThumbprintOk() (*string, bool)`

GetPublicKeyThumbprintOk returns a tuple with the PublicKeyThumbprint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKeyThumbprint

`func (o *Managedcluster) SetPublicKeyThumbprint(v string)`

SetPublicKeyThumbprint sets PublicKeyThumbprint field to given value.

### HasPublicKeyThumbprint

`func (o *Managedcluster) HasPublicKeyThumbprint() bool`

HasPublicKeyThumbprint returns a boolean if a field has been set.

### SetPublicKeyThumbprintNil

`func (o *Managedcluster) SetPublicKeyThumbprintNil(b bool)`

 SetPublicKeyThumbprintNil sets the value for PublicKeyThumbprint to be an explicit nil

### UnsetPublicKeyThumbprint
`func (o *Managedcluster) UnsetPublicKeyThumbprint()`

UnsetPublicKeyThumbprint ensures that no value is present for PublicKeyThumbprint, not even an explicit nil
### GetPublicKey

`func (o *Managedcluster) GetPublicKey() string`

GetPublicKey returns the PublicKey field if non-nil, zero value otherwise.

### GetPublicKeyOk

`func (o *Managedcluster) GetPublicKeyOk() (*string, bool)`

GetPublicKeyOk returns a tuple with the PublicKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKey

`func (o *Managedcluster) SetPublicKey(v string)`

SetPublicKey sets PublicKey field to given value.

### HasPublicKey

`func (o *Managedcluster) HasPublicKey() bool`

HasPublicKey returns a boolean if a field has been set.

### SetPublicKeyNil

`func (o *Managedcluster) SetPublicKeyNil(b bool)`

 SetPublicKeyNil sets the value for PublicKey to be an explicit nil

### UnsetPublicKey
`func (o *Managedcluster) UnsetPublicKey()`

UnsetPublicKey ensures that no value is present for PublicKey, not even an explicit nil
### GetEncryptionConfiguration

`func (o *Managedcluster) GetEncryptionConfiguration() Managedclusterencryptionconfig`

GetEncryptionConfiguration returns the EncryptionConfiguration field if non-nil, zero value otherwise.

### GetEncryptionConfigurationOk

`func (o *Managedcluster) GetEncryptionConfigurationOk() (*Managedclusterencryptionconfig, bool)`

GetEncryptionConfigurationOk returns a tuple with the EncryptionConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncryptionConfiguration

`func (o *Managedcluster) SetEncryptionConfiguration(v Managedclusterencryptionconfig)`

SetEncryptionConfiguration sets EncryptionConfiguration field to given value.

### HasEncryptionConfiguration

`func (o *Managedcluster) HasEncryptionConfiguration() bool`

HasEncryptionConfiguration returns a boolean if a field has been set.

### GetAlertKey

`func (o *Managedcluster) GetAlertKey() string`

GetAlertKey returns the AlertKey field if non-nil, zero value otherwise.

### GetAlertKeyOk

`func (o *Managedcluster) GetAlertKeyOk() (*string, bool)`

GetAlertKeyOk returns a tuple with the AlertKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertKey

`func (o *Managedcluster) SetAlertKey(v string)`

SetAlertKey sets AlertKey field to given value.

### HasAlertKey

`func (o *Managedcluster) HasAlertKey() bool`

HasAlertKey returns a boolean if a field has been set.

### GetClientIds

`func (o *Managedcluster) GetClientIds() []string`

GetClientIds returns the ClientIds field if non-nil, zero value otherwise.

### GetClientIdsOk

`func (o *Managedcluster) GetClientIdsOk() (*[]string, bool)`

GetClientIdsOk returns a tuple with the ClientIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientIds

`func (o *Managedcluster) SetClientIds(v []string)`

SetClientIds sets ClientIds field to given value.

### HasClientIds

`func (o *Managedcluster) HasClientIds() bool`

HasClientIds returns a boolean if a field has been set.

### GetServiceCount

`func (o *Managedcluster) GetServiceCount() int32`

GetServiceCount returns the ServiceCount field if non-nil, zero value otherwise.

### GetServiceCountOk

`func (o *Managedcluster) GetServiceCountOk() (*int32, bool)`

GetServiceCountOk returns a tuple with the ServiceCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceCount

`func (o *Managedcluster) SetServiceCount(v int32)`

SetServiceCount sets ServiceCount field to given value.

### HasServiceCount

`func (o *Managedcluster) HasServiceCount() bool`

HasServiceCount returns a boolean if a field has been set.

### GetCcId

`func (o *Managedcluster) GetCcId() string`

GetCcId returns the CcId field if non-nil, zero value otherwise.

### GetCcIdOk

`func (o *Managedcluster) GetCcIdOk() (*string, bool)`

GetCcIdOk returns a tuple with the CcId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcId

`func (o *Managedcluster) SetCcId(v string)`

SetCcId sets CcId field to given value.

### HasCcId

`func (o *Managedcluster) HasCcId() bool`

HasCcId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Managedcluster) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Managedcluster) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Managedcluster) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Managedcluster) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### SetCreatedAtNil

`func (o *Managedcluster) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *Managedcluster) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil
### GetUpdatedAt

`func (o *Managedcluster) GetUpdatedAt() SailPointTime`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Managedcluster) GetUpdatedAtOk() (*SailPointTime, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Managedcluster) SetUpdatedAt(v SailPointTime)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Managedcluster) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### SetUpdatedAtNil

`func (o *Managedcluster) SetUpdatedAtNil(b bool)`

 SetUpdatedAtNil sets the value for UpdatedAt to be an explicit nil

### UnsetUpdatedAt
`func (o *Managedcluster) UnsetUpdatedAt()`

UnsetUpdatedAt ensures that no value is present for UpdatedAt, not even an explicit nil
### GetLastReleaseNotifiedAt

`func (o *Managedcluster) GetLastReleaseNotifiedAt() SailPointTime`

GetLastReleaseNotifiedAt returns the LastReleaseNotifiedAt field if non-nil, zero value otherwise.

### GetLastReleaseNotifiedAtOk

`func (o *Managedcluster) GetLastReleaseNotifiedAtOk() (*SailPointTime, bool)`

GetLastReleaseNotifiedAtOk returns a tuple with the LastReleaseNotifiedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReleaseNotifiedAt

`func (o *Managedcluster) SetLastReleaseNotifiedAt(v SailPointTime)`

SetLastReleaseNotifiedAt sets LastReleaseNotifiedAt field to given value.

### HasLastReleaseNotifiedAt

`func (o *Managedcluster) HasLastReleaseNotifiedAt() bool`

HasLastReleaseNotifiedAt returns a boolean if a field has been set.

### SetLastReleaseNotifiedAtNil

`func (o *Managedcluster) SetLastReleaseNotifiedAtNil(b bool)`

 SetLastReleaseNotifiedAtNil sets the value for LastReleaseNotifiedAt to be an explicit nil

### UnsetLastReleaseNotifiedAt
`func (o *Managedcluster) UnsetLastReleaseNotifiedAt()`

UnsetLastReleaseNotifiedAt ensures that no value is present for LastReleaseNotifiedAt, not even an explicit nil
### GetUpdatePreferences

`func (o *Managedcluster) GetUpdatePreferences() ManagedclusterUpdatePreferences`

GetUpdatePreferences returns the UpdatePreferences field if non-nil, zero value otherwise.

### GetUpdatePreferencesOk

`func (o *Managedcluster) GetUpdatePreferencesOk() (*ManagedclusterUpdatePreferences, bool)`

GetUpdatePreferencesOk returns a tuple with the UpdatePreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatePreferences

`func (o *Managedcluster) SetUpdatePreferences(v ManagedclusterUpdatePreferences)`

SetUpdatePreferences sets UpdatePreferences field to given value.

### HasUpdatePreferences

`func (o *Managedcluster) HasUpdatePreferences() bool`

HasUpdatePreferences returns a boolean if a field has been set.

### GetCurrentInstalledReleaseVersion

`func (o *Managedcluster) GetCurrentInstalledReleaseVersion() string`

GetCurrentInstalledReleaseVersion returns the CurrentInstalledReleaseVersion field if non-nil, zero value otherwise.

### GetCurrentInstalledReleaseVersionOk

`func (o *Managedcluster) GetCurrentInstalledReleaseVersionOk() (*string, bool)`

GetCurrentInstalledReleaseVersionOk returns a tuple with the CurrentInstalledReleaseVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentInstalledReleaseVersion

`func (o *Managedcluster) SetCurrentInstalledReleaseVersion(v string)`

SetCurrentInstalledReleaseVersion sets CurrentInstalledReleaseVersion field to given value.

### HasCurrentInstalledReleaseVersion

`func (o *Managedcluster) HasCurrentInstalledReleaseVersion() bool`

HasCurrentInstalledReleaseVersion returns a boolean if a field has been set.

### SetCurrentInstalledReleaseVersionNil

`func (o *Managedcluster) SetCurrentInstalledReleaseVersionNil(b bool)`

 SetCurrentInstalledReleaseVersionNil sets the value for CurrentInstalledReleaseVersion to be an explicit nil

### UnsetCurrentInstalledReleaseVersion
`func (o *Managedcluster) UnsetCurrentInstalledReleaseVersion()`

UnsetCurrentInstalledReleaseVersion ensures that no value is present for CurrentInstalledReleaseVersion, not even an explicit nil
### GetUpdatePackage

`func (o *Managedcluster) GetUpdatePackage() string`

GetUpdatePackage returns the UpdatePackage field if non-nil, zero value otherwise.

### GetUpdatePackageOk

`func (o *Managedcluster) GetUpdatePackageOk() (*string, bool)`

GetUpdatePackageOk returns a tuple with the UpdatePackage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatePackage

`func (o *Managedcluster) SetUpdatePackage(v string)`

SetUpdatePackage sets UpdatePackage field to given value.

### HasUpdatePackage

`func (o *Managedcluster) HasUpdatePackage() bool`

HasUpdatePackage returns a boolean if a field has been set.

### SetUpdatePackageNil

`func (o *Managedcluster) SetUpdatePackageNil(b bool)`

 SetUpdatePackageNil sets the value for UpdatePackage to be an explicit nil

### UnsetUpdatePackage
`func (o *Managedcluster) UnsetUpdatePackage()`

UnsetUpdatePackage ensures that no value is present for UpdatePackage, not even an explicit nil
### GetIsOutOfDateNotifiedAt

`func (o *Managedcluster) GetIsOutOfDateNotifiedAt() SailPointTime`

GetIsOutOfDateNotifiedAt returns the IsOutOfDateNotifiedAt field if non-nil, zero value otherwise.

### GetIsOutOfDateNotifiedAtOk

`func (o *Managedcluster) GetIsOutOfDateNotifiedAtOk() (*SailPointTime, bool)`

GetIsOutOfDateNotifiedAtOk returns a tuple with the IsOutOfDateNotifiedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsOutOfDateNotifiedAt

`func (o *Managedcluster) SetIsOutOfDateNotifiedAt(v SailPointTime)`

SetIsOutOfDateNotifiedAt sets IsOutOfDateNotifiedAt field to given value.

### HasIsOutOfDateNotifiedAt

`func (o *Managedcluster) HasIsOutOfDateNotifiedAt() bool`

HasIsOutOfDateNotifiedAt returns a boolean if a field has been set.

### SetIsOutOfDateNotifiedAtNil

`func (o *Managedcluster) SetIsOutOfDateNotifiedAtNil(b bool)`

 SetIsOutOfDateNotifiedAtNil sets the value for IsOutOfDateNotifiedAt to be an explicit nil

### UnsetIsOutOfDateNotifiedAt
`func (o *Managedcluster) UnsetIsOutOfDateNotifiedAt()`

UnsetIsOutOfDateNotifiedAt ensures that no value is present for IsOutOfDateNotifiedAt, not even an explicit nil
### GetConsolidatedHealthIndicatorsStatus

`func (o *Managedcluster) GetConsolidatedHealthIndicatorsStatus() string`

GetConsolidatedHealthIndicatorsStatus returns the ConsolidatedHealthIndicatorsStatus field if non-nil, zero value otherwise.

### GetConsolidatedHealthIndicatorsStatusOk

`func (o *Managedcluster) GetConsolidatedHealthIndicatorsStatusOk() (*string, bool)`

GetConsolidatedHealthIndicatorsStatusOk returns a tuple with the ConsolidatedHealthIndicatorsStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsolidatedHealthIndicatorsStatus

`func (o *Managedcluster) SetConsolidatedHealthIndicatorsStatus(v string)`

SetConsolidatedHealthIndicatorsStatus sets ConsolidatedHealthIndicatorsStatus field to given value.

### HasConsolidatedHealthIndicatorsStatus

`func (o *Managedcluster) HasConsolidatedHealthIndicatorsStatus() bool`

HasConsolidatedHealthIndicatorsStatus returns a boolean if a field has been set.

### SetConsolidatedHealthIndicatorsStatusNil

`func (o *Managedcluster) SetConsolidatedHealthIndicatorsStatusNil(b bool)`

 SetConsolidatedHealthIndicatorsStatusNil sets the value for ConsolidatedHealthIndicatorsStatus to be an explicit nil

### UnsetConsolidatedHealthIndicatorsStatus
`func (o *Managedcluster) UnsetConsolidatedHealthIndicatorsStatus()`

UnsetConsolidatedHealthIndicatorsStatus ensures that no value is present for ConsolidatedHealthIndicatorsStatus, not even an explicit nil

