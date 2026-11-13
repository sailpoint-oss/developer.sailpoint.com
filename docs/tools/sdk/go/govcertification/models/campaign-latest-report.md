# CampaignLatestReport

# CampaignLatestReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique ID of the campaign report. | [optional] 
**Name** | Pointer to **string** | The human readable report name | [optional] 
**Created** | Pointer to **SailPointTime** | The date the report was created. | [optional] 
**Status** | Pointer to **CampaignReportStatus** |  | [optional] 

## Methods

### NewCampaignLatestReport

`func NewCampaignLatestReport() *CampaignLatestReport`

NewCampaignLatestReport instantiates a new CampaignLatestReport object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignLatestReportWithDefaults

`func NewCampaignLatestReportWithDefaults() *CampaignLatestReport`

NewCampaignLatestReportWithDefaults instantiates a new CampaignLatestReport object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignLatestReport) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignLatestReport) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignLatestReport) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CampaignLatestReport) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *CampaignLatestReport) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignLatestReport) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignLatestReport) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CampaignLatestReport) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *CampaignLatestReport) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CampaignLatestReport) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CampaignLatestReport) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CampaignLatestReport) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetStatus

`func (o *CampaignLatestReport) GetStatus() CampaignReportStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CampaignLatestReport) GetStatusOk() (*CampaignReportStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CampaignLatestReport) SetStatus(v CampaignReportStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CampaignLatestReport) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


