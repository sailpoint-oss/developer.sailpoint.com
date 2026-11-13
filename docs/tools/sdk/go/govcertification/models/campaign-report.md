# CampaignReport

# CampaignReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the campaign report. | 
**Name** | **string** | The human readable report name | 
**CampaignId** | **string** | The unique ID of the campaign. | 
**Type** | **CampaignReportType** |  | 
**Format** | **CampaignReportFormat** |  | 
**Created** | **SailPointTime** | The date the report was created. | 
**Modified** | Pointer to **SailPointTime** | The date the report was modified. | [optional] 
**Status** | **CampaignReportStatus** |  | 

## Methods

### NewCampaignReport

`func NewCampaignReport(id string, name string, campaignId string, type_ CampaignReportType, format CampaignReportFormat, created SailPointTime, status CampaignReportStatus, ) *CampaignReport`

NewCampaignReport instantiates a new CampaignReport object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignReportWithDefaults

`func NewCampaignReportWithDefaults() *CampaignReport`

NewCampaignReportWithDefaults instantiates a new CampaignReport object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignReport) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignReport) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignReport) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *CampaignReport) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignReport) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignReport) SetName(v string)`

SetName sets Name field to given value.


### GetCampaignId

`func (o *CampaignReport) GetCampaignId() string`

GetCampaignId returns the CampaignId field if non-nil, zero value otherwise.

### GetCampaignIdOk

`func (o *CampaignReport) GetCampaignIdOk() (*string, bool)`

GetCampaignIdOk returns a tuple with the CampaignId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignId

`func (o *CampaignReport) SetCampaignId(v string)`

SetCampaignId sets CampaignId field to given value.


### GetType

`func (o *CampaignReport) GetType() CampaignReportType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignReport) GetTypeOk() (*CampaignReportType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignReport) SetType(v CampaignReportType)`

SetType sets Type field to given value.


### GetFormat

`func (o *CampaignReport) GetFormat() CampaignReportFormat`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *CampaignReport) GetFormatOk() (*CampaignReportFormat, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *CampaignReport) SetFormat(v CampaignReportFormat)`

SetFormat sets Format field to given value.


### GetCreated

`func (o *CampaignReport) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CampaignReport) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CampaignReport) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *CampaignReport) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CampaignReport) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CampaignReport) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CampaignReport) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetStatus

`func (o *CampaignReport) GetStatus() CampaignReportStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CampaignReport) GetStatusOk() (*CampaignReportStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CampaignReport) SetStatus(v CampaignReportStatus)`

SetStatus sets Status field to given value.



