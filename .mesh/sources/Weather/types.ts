// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace WeatherTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number; }
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: URL | string; output: URL | string; }
  /** Represents date values */
  Date: { input: string; output: string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
  /** Returns severe weather alerts issued by meteorological agencies - given a lat, and a lon. */
  alerts?: Maybe<WeatherAlert>;
  /** Returns a Current Observation - given a lat, and a lon. */
  current?: Maybe<CurrentObsGroup>;
  /**
   * Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC.
   *
   */
  forecast_daily?: Maybe<ForecastDay>;
  /** Returns a 60 minute precipitation forecast, where each point represents one minute (1 min) period. */
  forecast_minutely?: Maybe<FCMinutely>;
  /** Returns 72 hour (hourly) Air Quality forecast, where each point represents a one hour period. */
  forecast_airquality?: Maybe<AQHourly>;
  /** Returns historical air quality conditions. See https://www.weatherbit.io/api for API specific rate limits. */
  history_airquality?: Maybe<AQCurrentGroup>;
  /** Returns current air quality conditions. */
  current_airquality?: Maybe<AQCurrentGroup>;
  /**
   * Returns an hourly forecast, where each point represents a one hour period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.
   *
   */
  forecast_hourly?: Maybe<ForecastHourly>;
  /** Returns Agweather Forecast  - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. */
  forecast_agweather?: Maybe<ForecastAG>;
  /** Returns Historical Agweather Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. */
  history_agweather?: Maybe<HistoryAG>;
  /** Returns Historical Climate Normals (Averages) - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. */
  normals?: Maybe<Normals>;
  /** Returns Historical Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. */
  history_daily?: Maybe<HistoryDay>;
  /** Returns Historical Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. */
  history_hourly?: Maybe<History>;
  /** Returns Historical Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. */
  history_subhourly?: Maybe<HistorySubhourly>;
  /** Retrieve an 8 day forecast relevant to te Energy Sector (degree days, solar radiation, precipitation, wind). */
  forecast_energy?: Maybe<EnergyObsGroupForecast>;
  /** Returns aggregate energy specific historical weather fields, over a specified time period. See https://www.weatherbit.io/api for API specific rate limits. */
  history_energy?: Maybe<EnergyObsGroup>;
  /** Downloads bulk data files - OPTIONS: ( current.csv.gz, forecast_hourly.csv.gz, forecast_daily.csv.gz). Units are Metric (Celcius, m/s, etc). */
  bulk_files?: Maybe<Scalars['JSON']['output']>;
};


export type QueryalertsArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
};


export type QuerycurrentArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  include?: InputMaybe<queryInput_current_include>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  stations?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['String']['input']>;
  cities?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<queryInput_current_units>;
  lang?: InputMaybe<queryInput_current_lang>;
  key: Scalars['String']['input'];
};


export type Queryforecast_dailyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  days?: InputMaybe<Scalars['Float']['input']>;
  units?: InputMaybe<queryInput_forecast_daily_units>;
  lang?: InputMaybe<queryInput_forecast_daily_lang>;
  key: Scalars['String']['input'];
};


export type Queryforecast_minutelyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<queryInput_forecast_minutely_units>;
  key: Scalars['String']['input'];
};


export type Queryforecast_airqualityArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  hours?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryhistory_airqualityArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
};


export type Querycurrent_airqualityArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
};


export type Queryforecast_hourlyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<queryInput_forecast_hourly_units>;
  lang?: InputMaybe<queryInput_forecast_hourly_lang>;
  hours?: InputMaybe<Scalars['Int']['input']>;
  key: Scalars['String']['input'];
};


export type Queryforecast_agweatherArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  start_date: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  units?: InputMaybe<queryInput_forecast_agweather_units>;
  key: Scalars['String']['input'];
};


export type Queryhistory_agweatherArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  start_date: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  tp: queryInput_history_agweather_tp;
  units?: InputMaybe<queryInput_history_agweather_units>;
  key: Scalars['String']['input'];
};


export type QuerynormalsArgs = {
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
  start_day: Scalars['String']['input'];
  end_day: Scalars['String']['input'];
  tp: queryInput_normals_tp;
  units?: InputMaybe<queryInput_normals_units>;
  series_year: Scalars['Float']['input'];
  key: Scalars['String']['input'];
};


export type Queryhistory_dailyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  start_date: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  units?: InputMaybe<queryInput_history_daily_units>;
  lang?: InputMaybe<queryInput_history_daily_lang>;
  key: Scalars['String']['input'];
};


export type Queryhistory_hourlyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  start_date: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  units?: InputMaybe<queryInput_history_hourly_units>;
  lang?: InputMaybe<queryInput_history_hourly_lang>;
  tz?: InputMaybe<queryInput_history_hourly_tz>;
  key: Scalars['String']['input'];
};


export type Queryhistory_subhourlyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  city_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  start_date: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  units?: InputMaybe<queryInput_history_subhourly_units>;
  lang?: InputMaybe<queryInput_history_subhourly_lang>;
  tz?: InputMaybe<queryInput_history_subhourly_tz>;
  key: Scalars['String']['input'];
};


export type Queryforecast_energyArgs = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  threshold?: InputMaybe<Scalars['Float']['input']>;
  units?: InputMaybe<queryInput_forecast_energy_units>;
  tp?: InputMaybe<queryInput_forecast_energy_tp>;
  key: Scalars['String']['input'];
};


export type Queryhistory_energyArgs = {
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
  start_date: Scalars['String']['input'];
  end_date: Scalars['String']['input'];
  tp?: InputMaybe<queryInput_history_energy_tp>;
  threshold?: InputMaybe<Scalars['Float']['input']>;
  units?: InputMaybe<queryInput_history_energy_units>;
  key: Scalars['String']['input'];
};


export type Querybulk_filesArgs = {
  key: Scalars['String']['input'];
};

export type WeatherAlert = {
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  alerts?: Maybe<Array<Maybe<WeatherAlertGroup>>>;
};

export type WeatherAlertGroup = {
  /** Brief description of weather alert */
  title?: Maybe<Scalars['String']['output']>;
  /** Full description of weather alert */
  description?: Maybe<Scalars['String']['output']>;
  /** Severity of weather. (Advisory | Watch | Warning) */
  severity?: Maybe<Scalars['String']['output']>;
  /** Issued time UTC */
  effective_utc?: Maybe<Scalars['String']['output']>;
  /** Issued time local */
  effective_local?: Maybe<Scalars['String']['output']>;
  /** Expiration time UTC */
  expires_utc?: Maybe<Scalars['String']['output']>;
  /** Expiration time local */
  expires_local?: Maybe<Scalars['String']['output']>;
  /** URI to weather alert */
  uri?: Maybe<Scalars['URL']['output']>;
  alerts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CurrentObsGroup = {
  /** Count of found observations */
  count?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<CurrentObs>>>;
};

export type CurrentObs = {
  /** City name (closest) */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Source Station ID */
  station?: Maybe<Scalars['String']['output']>;
  /** List of data sources used in response */
  sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Visibility - default (M) */
  vis?: Maybe<Scalars['Int']['output']>;
  /** Relative humidity (%) */
  rh?: Maybe<Scalars['Int']['output']>;
  /** Dew point temperature - default (C) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Wind direction (degrees) */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Cardinal wind direction */
  wind_cdir?: Maybe<Scalars['String']['output']>;
  /** Cardinal wind direction (text) */
  wind_cdir_full?: Maybe<Scalars['String']['output']>;
  /** Wind speed - Default (m/s) */
  wind_speed?: Maybe<Scalars['Float']['output']>;
  /** Wind gust speed - Default (m/s) */
  gust?: Maybe<Scalars['Float']['output']>;
  /** Temperature - Default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Apparent temperature - Default (C) */
  app_temp?: Maybe<Scalars['Float']['output']>;
  /** Cloud cover (%) */
  clouds?: Maybe<Scalars['Int']['output']>;
  weather?: Maybe<query_current_data_items_weather>;
  /** Cycle Hour (UTC) of observation */
  datetime?: Maybe<Scalars['String']['output']>;
  /** Full time (UTC) of observation (YYYY-MM-DD HH:MM) */
  ob_time?: Maybe<Scalars['String']['output']>;
  /** Unix Timestamp */
  ts?: Maybe<Scalars['Float']['output']>;
  /** Time (UTC) of Sunrise (HH:MM) */
  sunrise?: Maybe<Scalars['String']['output']>;
  /** Time (UTC) of Sunset (HH:MM) */
  sunset?: Maybe<Scalars['String']['output']>;
  /** Mean sea level pressure in millibars (mb) */
  slp?: Maybe<Scalars['Float']['output']>;
  /** Pressure (mb) */
  pres?: Maybe<Scalars['Float']['output']>;
  /** Air quality index (US EPA standard 0 to +500) */
  aqi?: Maybe<Scalars['Float']['output']>;
  /** UV Index */
  uv?: Maybe<Scalars['Float']['output']>;
  /** Estimated solar radiation (W/m^2) */
  solar_rad?: Maybe<Scalars['Float']['output']>;
  /** Global horizontal irradiance (W/m^2) */
  ghi?: Maybe<Scalars['Float']['output']>;
  /** Direct normal irradiance (W/m^2) */
  dni?: Maybe<Scalars['Float']['output']>;
  /** Diffuse horizontal irradiance (W/m^2) */
  dhi?: Maybe<Scalars['Float']['output']>;
  /** Current solar elevation angle (Degrees) */
  elev_angle?: Maybe<Scalars['Float']['output']>;
  /** Current solar hour angle (Degrees) */
  hour_angle?: Maybe<Scalars['Float']['output']>;
  /** Part of the day (d = day, n = night) */
  pod?: Maybe<Scalars['String']['output']>;
  /** Precipitation in last hour - Default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Snowfall in last hour - Default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
};

export type query_current_data_items_weather = {
  /** Icon code for forecast image display */
  icon?: Maybe<Scalars['String']['output']>;
  /** Weather Condition code */
  code?: Maybe<Scalars['Int']['output']>;
  /** Weather Condition description */
  description?: Maybe<Scalars['String']['output']>;
};

/** Include 1 hour - minutely precip forecast in the response, or severe weather alerts */
export type queryInput_current_include =
  | 'minutely'
  | 'alerts';

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_current_units =
  | 'S'
  | 'I';

/** Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> */
export type queryInput_current_lang =
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'de'
  | 'fi'
  | 'fr'
  | 'el'
  | 'es'
  | 'et'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'is'
  | 'kw'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'zh'
  | 'zh_tw';

export type ForecastDay = {
  /** City Name */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State Abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country Abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<Forecast>>>;
};

export type Forecast = {
  /** Unix Timestamp */
  ts?: Maybe<Scalars['Float']['output']>;
  /** Timestamp in local time */
  timestamp_local?: Maybe<Scalars['String']['output']>;
  /** Timestamp UTC */
  timestamp_utc?: Maybe<Scalars['String']['output']>;
  /** Date in format "YYYY-MM-DD:HH". All datetime is in (UTC) */
  datetime?: Maybe<Scalars['String']['output']>;
  /** Accumulated snowfall since last forecast point - default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
  /** Snow Depth - default (mm) */
  snow_depth?: Maybe<Scalars['Float']['output']>;
  /** Accumulated precipitation since last forecast point - default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Temperature (Average) - default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Dewpoint (Average) - default (C) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Maximum daily Temperature - default (C) */
  max_temp?: Maybe<Scalars['Float']['output']>;
  /** Minimum daily Temperature - default (C) */
  min_temp?: Maybe<Scalars['Float']['output']>;
  /** Apparent Maximum daily Temperature - default (C) */
  app_max_temp?: Maybe<Scalars['Float']['output']>;
  /** Apparent Minimum daily Temperature - default (C) */
  app_min_temp?: Maybe<Scalars['Float']['output']>;
  /** Relative Humidity as a percentage (%) */
  rh?: Maybe<Scalars['Int']['output']>;
  /** Cloud cover as a percentage (%) */
  clouds?: Maybe<Scalars['Int']['output']>;
  weather?: Maybe<query_forecast_daily_data_items_weather>;
  /** Mean Sea level pressure (mb) */
  slp?: Maybe<Scalars['Float']['output']>;
  /** Pressure (mb) */
  pres?: Maybe<Scalars['Float']['output']>;
  /** UV Index */
  uv?: Maybe<Scalars['Float']['output']>;
  /** [Deprecated] Max direct component of solar insolation (W/m^2) */
  max_dhi?: Maybe<Scalars['Float']['output']>;
  /** Average Visibility default (KM) */
  vis?: Maybe<Scalars['Float']['output']>;
  /** Chance of Precipitation as a percentage (%) */
  pop?: Maybe<Scalars['Float']['output']>;
  /** Moon phase */
  moon_phase?: Maybe<Scalars['Float']['output']>;
  /** Sunrise unix timestamp */
  sunrise_ts?: Maybe<Scalars['Int']['output']>;
  /** Sunset unix timestamp */
  sunset_ts?: Maybe<Scalars['Int']['output']>;
  /** Moonrise unix timestamp */
  moonrise_ts?: Maybe<Scalars['Int']['output']>;
  /** Moonset unix timestamp */
  moonset_ts?: Maybe<Scalars['Int']['output']>;
  /** Part of the day (d = day, n = night) */
  pod?: Maybe<Scalars['String']['output']>;
  /** Wind Speed (default m/s) */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Wind direction */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Cardinal wind direction */
  wind_cdir?: Maybe<Scalars['String']['output']>;
  /** Cardinal wind direction (text) */
  wind_cdir_full?: Maybe<Scalars['String']['output']>;
};

export type query_forecast_daily_data_items_weather = {
  /** Icon code for forecast image display */
  icon?: Maybe<Scalars['String']['output']>;
  /** Weather Condition code */
  code?: Maybe<Scalars['Int']['output']>;
  /** Weather Condition description */
  description?: Maybe<Scalars['String']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_forecast_daily_units =
  | 'S'
  | 'I';

/** Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> */
export type queryInput_forecast_daily_lang =
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'de'
  | 'fi'
  | 'fr'
  | 'el'
  | 'es'
  | 'et'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'is'
  | 'kw'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'zh'
  | 'zh_tw';

export type FCMinutely = {
  /** City Name */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State Abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country Abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<FCMinutelyOb>>>;
};

export type FCMinutelyOb = {
  /** Full time (UTC) of forecast point (YYYY-MM-DD HH:MM) */
  timestamp_utc?: Maybe<Scalars['String']['output']>;
  /** Full local time of forecast point (YYYY-MM-DD HH:MM) */
  timestamp_local?: Maybe<Scalars['String']['output']>;
  /** Unix Timestamp */
  ts?: Maybe<Scalars['Float']['output']>;
  /** Precipitation rate - Default (mm/hr) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Temperature - Default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Snowfall rate - Default (mm/hr) */
  snow?: Maybe<Scalars['Float']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_forecast_minutely_units =
  | 'S'
  | 'I';

export type AQHourly = {
  /** City Name */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State Abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country Abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<AQHour>>>;
};

export type AQHour = {
  /** Unix Timestamp */
  ts?: Maybe<Scalars['Float']['output']>;
  /** Timestamp in local time */
  timestamp_local?: Maybe<Scalars['String']['output']>;
  /** Timestamp UTC */
  timestamp_utc?: Maybe<Scalars['String']['output']>;
  /** Cloud cover as a percentage (%) */
  aqi?: Maybe<Scalars['Int']['output']>;
  /** Concentration of SO2 (µg/m³) */
  so2?: Maybe<Scalars['Float']['output']>;
  /** Concentration of NO2 (µg/m³) */
  no2?: Maybe<Scalars['Float']['output']>;
  /** Concentration of O3 (µg/m³) */
  o3?: Maybe<Scalars['Float']['output']>;
  /** Concentration of PM 2.5 (µg/m³) */
  pm25?: Maybe<Scalars['Float']['output']>;
  /** Concentration of PM 10 (µg/m³) */
  pm10?: Maybe<Scalars['Float']['output']>;
};

export type AQCurrentGroup = {
  /** City Name */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State Abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country Abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<AQCurrent>>>;
};

export type AQCurrent = {
  /** Cloud cover as a percentage (%) */
  aqi?: Maybe<Scalars['Int']['output']>;
  /** Concentration of SO2 (µg/m³) */
  so2?: Maybe<Scalars['Float']['output']>;
  /** Concentration of NO2 (µg/m³) */
  no2?: Maybe<Scalars['Float']['output']>;
  /** Concentration of O3 (µg/m³) */
  o3?: Maybe<Scalars['Float']['output']>;
  /** Concentration of PM 2.5 (µg/m³) */
  pm25?: Maybe<Scalars['Float']['output']>;
  /** Concentration of PM 10 (µg/m³) */
  pm10?: Maybe<Scalars['Float']['output']>;
};

export type ForecastHourly = {
  /** City Name */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State Abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country Abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<ForecastHour>>>;
};

export type ForecastHour = {
  /** Unix Timestamp */
  ts?: Maybe<Scalars['Float']['output']>;
  /** Timestamp in local time */
  timestamp_local?: Maybe<Scalars['String']['output']>;
  /** Timestamp UTC */
  timestamp_utc?: Maybe<Scalars['String']['output']>;
  /** Date in format "YYYY-MM-DD:HH". All datetime is in (UTC) */
  datetime?: Maybe<Scalars['String']['output']>;
  /** Accumulated snowfall since last forecast point - Default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
  /** Snow depth - Default (mm) */
  snow_depth?: Maybe<Scalars['Float']['output']>;
  /** Accumulated precipitation since last forecast point. Default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Temperature - Default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Dewpoint - Default (C) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Apparent Temperature - Default (C) */
  app_temp?: Maybe<Scalars['Float']['output']>;
  /** Relative Humidity as a percentage (%) */
  rh?: Maybe<Scalars['Int']['output']>;
  /** Cloud cover as a percentage (%) */
  clouds?: Maybe<Scalars['Int']['output']>;
  weather?: Maybe<query_forecast_hourly_data_items_weather>;
  /** Mean Sea level pressure (mb) */
  slp?: Maybe<Scalars['Float']['output']>;
  /** Pressure (mb) */
  pres?: Maybe<Scalars['Float']['output']>;
  /** UV Index */
  uv?: Maybe<Scalars['Float']['output']>;
  /** Estimated solar radiation (W/m^2) */
  solar_rad?: Maybe<Scalars['Float']['output']>;
  /** Global horizontal solar irradiance (W/m^2) */
  ghi?: Maybe<Scalars['Float']['output']>;
  /** Diffuse normal solar irradiance (W/m^2) */
  dhi?: Maybe<Scalars['Float']['output']>;
  /** Direct normal solar irradiance (W/m^2) */
  dni?: Maybe<Scalars['Float']['output']>;
  /** Visibility - Default (KM) */
  vis?: Maybe<Scalars['Float']['output']>;
  /** Part of day (d = day, n = night) */
  pod?: Maybe<Scalars['String']['output']>;
  /** Chance of Precipitation as a percentage (%) */
  pop?: Maybe<Scalars['Float']['output']>;
  /** Wind Speed - Default (m/s) */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Wind Gust Speed - Default (m/s) */
  wind_gust_spd?: Maybe<Scalars['Float']['output']>;
  /** Wind direction */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Cardinal wind direction */
  wind_cdir?: Maybe<Scalars['String']['output']>;
  /** Cardinal wind direction (text) */
  wind_cdir_full?: Maybe<Scalars['String']['output']>;
};

export type query_forecast_hourly_data_items_weather = {
  /** Icon code for forecast image display */
  icon?: Maybe<Scalars['String']['output']>;
  /** Weather Condition code */
  code?: Maybe<Scalars['Int']['output']>;
  /** Weather Condition description */
  description?: Maybe<Scalars['String']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_forecast_hourly_units =
  | 'S'
  | 'I';

/** Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> */
export type queryInput_forecast_hourly_lang =
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'de'
  | 'fi'
  | 'fr'
  | 'el'
  | 'es'
  | 'et'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'is'
  | 'kw'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'zh'
  | 'zh_tw';

export type ForecastAG = {
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<Maybe<HistoryAGObj>>>;
};

export type HistoryAGObj = {
  /** Bulk Soil Density */
  bulk_soil_density?: Maybe<Scalars['Float']['output']>;
  /** Average Downward Longwave Radiation Flux */
  dlwrf_avg?: Maybe<Scalars['Float']['output']>;
  /** Maximum Downward Longwave Radiation Flux */
  dlwrf_max?: Maybe<Scalars['Float']['output']>;
  /** Net Downward Longwave Radiation Flux */
  dlwrf_net?: Maybe<Scalars['Float']['output']>;
  /** Average Downward Shortwave Radiation Flux */
  dswrf_avg?: Maybe<Scalars['Float']['output']>;
  /** Maximum Downward Shortwave Radiation Flux */
  dswrf_max?: Maybe<Scalars['Float']['output']>;
  /** Net Downward Shortwave Radiation Flux */
  dswrf_net?: Maybe<Scalars['Float']['output']>;
  /** Evapotranspiration */
  evapotranspiration?: Maybe<Scalars['Float']['output']>;
  /** Precipitation */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Average Pressure */
  pres_avg?: Maybe<Scalars['Float']['output']>;
  /** Data revision status */
  revision_status?: Maybe<Scalars['String']['output']>;
  /** Average Skin Temperature */
  skin_temp_avg?: Maybe<Scalars['Float']['output']>;
  /** Maximum Skin Temperature */
  skin_temp_max?: Maybe<Scalars['Float']['output']>;
  /** Minimum Skin Temperature */
  skin_temp_min?: Maybe<Scalars['Float']['output']>;
  /** Soil Moisture (0-10cm depth) */
  soilm_0_10cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Moisture (100-200cm depth) */
  soilm_100_200cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Moisture (10-40cm depth) */
  soilm_10_40cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Moisture (40-100cm depth) */
  soilm_40_100cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Temperature (0-10cm depth) */
  soilt_0_10cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Temperature (100-200cm depth) */
  soilt_100_200cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Temperature (10-40cm depth) */
  soilt_10_40cm?: Maybe<Scalars['Float']['output']>;
  /** Soil Temperature (40-100cm depth) */
  soilt_40_100cm?: Maybe<Scalars['Float']['output']>;
  /** Specific Humidity */
  specific_humidity?: Maybe<Scalars['Float']['output']>;
  /** Timestamp in local time */
  timestamp_local?: Maybe<Scalars['String']['output']>;
  /** Timestamp UTC */
  timestamp_utc?: Maybe<Scalars['String']['output']>;
  /** Average Temperature at 2 meters */
  temp_2m_avg?: Maybe<Scalars['Float']['output']>;
  /** Volumetric Soil Moisture (0-10cm depth) */
  v_soilm_0_10cm?: Maybe<Scalars['Float']['output']>;
  /** Volumetric Soil Moisture (100-200cm depth) */
  v_soilm_100_200cm?: Maybe<Scalars['Float']['output']>;
  /** Volumetric Soil Moisture (10-40cm depth) */
  v_soilm_10_40cm?: Maybe<Scalars['Float']['output']>;
  /** Volumetric Soil Moisture (40-100cm depth) */
  v_soilm_40_100cm?: Maybe<Scalars['Float']['output']>;
  /** Valid Date */
  valid_date?: Maybe<Scalars['Date']['output']>;
  /** Average Wind Speed at 10 meters */
  wind_10m_spd_avg?: Maybe<Scalars['Float']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_forecast_agweather_units =
  | 'S'
  | 'I';

export type HistoryAG = {
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Array<Maybe<HistoryAGObj>>>;
};

/** Time period of calculation (daily [DEFAULT], or hourly). */
export type queryInput_history_agweather_tp =
  | 'daily'
  | 'hourly';

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_history_agweather_units =
  | 'S'
  | 'I';

export type Normals = {
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** List of data sources used in response */
  sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  data?: Maybe<Array<Maybe<NormalsObj>>>;
};

export type NormalsObj = {
  /** Day number */
  day?: Maybe<Scalars['Float']['output']>;
  /** Month number */
  month?: Maybe<Scalars['Float']['output']>;
  /** Hour number */
  hour?: Maybe<Scalars['Float']['output']>;
  /** Average temperature */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Average dew point */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Maximum wind speed */
  max_wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Minimum wind speed */
  min_wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Average wind speed */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Average wind direction */
  wind_dir?: Maybe<Scalars['Float']['output']>;
  /** Average Liquid equivalent precipitation - Default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Average Snowfall - Default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
};

/** Time period of calculation (daily, monthly, or hourly). */
export type queryInput_normals_tp =
  | 'daily'
  | 'hourly'
  | 'monthly';

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_normals_units =
  | 'S'
  | 'I';

export type HistoryDay = {
  /** City name (Closest) */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** List of data sources used in response */
  sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  data?: Maybe<Array<Maybe<HistoryDayObj>>>;
};

export type HistoryDayObj = {
  /** Date in format "YYYY-MM-DD". All datetime is in (UTC) */
  datetime?: Maybe<Scalars['Date']['output']>;
  /** Unix timestamp of datetime (Midnight UTC) */
  ts?: Maybe<Scalars['Int']['output']>;
  /** Data revision status (interim or final) */
  revision_status?: Maybe<Scalars['String']['output']>;
  /** Average sea level pressure (mb) */
  slp?: Maybe<Scalars['Float']['output']>;
  /** Average pressure (mb) */
  pres?: Maybe<Scalars['Float']['output']>;
  /** Average relative humidity as a percentage (%) */
  rh?: Maybe<Scalars['Float']['output']>;
  /** Average dewpoint - Default (C) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Average temperature - Default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Max temperature - Default (C) */
  max_temp?: Maybe<Scalars['Float']['output']>;
  /** Time of max memperature - Unix Timestamp */
  max_temp_ts?: Maybe<Scalars['Float']['output']>;
  /** Min temperature - Default (C) */
  min_temp?: Maybe<Scalars['Float']['output']>;
  /** Time of max temperature - unix timestamp */
  min_temp_ts?: Maybe<Scalars['Float']['output']>;
  /** Average wind speed - default (m/s) */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Average wind direction (degrees) */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Wind gust speed - default (m/s) */
  wind_gust_spd?: Maybe<Scalars['Float']['output']>;
  /** Max 2min Wind Speed - default (m/s) */
  max_wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Direction of wind at time of max 2min wind (degrees) */
  max_wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Time of max 2min wind - unix timestamp */
  max_wind_spd_ts?: Maybe<Scalars['Float']['output']>;
  /** Average hourly global horizontal solar irradiance (W/m^2) */
  ghi?: Maybe<Scalars['Int']['output']>;
  /** Total global horizontal solar irradiance (W/m^2) */
  t_ghi?: Maybe<Scalars['Int']['output']>;
  /** Average direct normal solar irradiance (W/m^2) */
  dni?: Maybe<Scalars['Int']['output']>;
  /** Total direct normal solar irradiance (W/m^2) */
  t_dni?: Maybe<Scalars['Int']['output']>;
  /** Average hourly diffuse horizontal solar irradiance (W/m^2) */
  dhi?: Maybe<Scalars['Int']['output']>;
  /** Total diffuse horizontal solar irradiance (W/m^2) */
  t_dhi?: Maybe<Scalars['Int']['output']>;
  /** Max UV Index (1-11+) */
  max_uv?: Maybe<Scalars['Float']['output']>;
  /** Liquid equivalent precipitation - default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Satellite estimated liquid equivalent precipitation - default (mm) */
  precip_gpm?: Maybe<Scalars['Float']['output']>;
  /** Snowfall - default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
  /** Snow Depth - default (mm) */
  snow_depth?: Maybe<Scalars['Float']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_history_daily_units =
  | 'S'
  | 'I';

/** Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> */
export type queryInput_history_daily_lang =
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'de'
  | 'fi'
  | 'fr'
  | 'el'
  | 'es'
  | 'et'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'is'
  | 'kw'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'zh'
  | 'zh_tw';

export type History = {
  /** City name (Closest) */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** List of data sources used in response */
  sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  data?: Maybe<Array<Maybe<HistoryObj>>>;
};

export type HistoryObj = {
  /** Unix Timestamp */
  ts?: Maybe<Scalars['Float']['output']>;
  /** Timestamp in local time */
  timestamp_local?: Maybe<Scalars['String']['output']>;
  /** Timestamp UTC */
  timestamp_utc?: Maybe<Scalars['String']['output']>;
  /** Data revision status (interim or final) */
  revision_status?: Maybe<Scalars['String']['output']>;
  /** Date in format "YYYY-MM-DD:HH". All datetime is in (UTC) */
  datetime?: Maybe<Scalars['String']['output']>;
  /** Sea level pressure (mb) */
  slp?: Maybe<Scalars['Float']['output']>;
  /** Pressure (mb) */
  pres?: Maybe<Scalars['Float']['output']>;
  /** Relative Humidity as a percentage (%) */
  rh?: Maybe<Scalars['Int']['output']>;
  /** Dew point (Default Celcius) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Temperature (Default Celcius) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Apparent Temperature or Wind Chill/Heat Index (Default Celcius) */
  app_temp?: Maybe<Scalars['Float']['output']>;
  /** Wind Speed (Default m/s) */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Wind Gust Speed - Default (m/s) */
  wind_gust_spd?: Maybe<Scalars['Float']['output']>;
  /** Wind direction (Degrees) */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** UV Index (1-11+) */
  uv?: Maybe<Scalars['Float']['output']>;
  /** Estimated solar radiation (W/m^2) */
  solar_rad?: Maybe<Scalars['Float']['output']>;
  /** Global horizontal solar irradiance (W/m^2) */
  ghi?: Maybe<Scalars['Float']['output']>;
  /** Diffuse normal solar irradiance (W/m^2) */
  dhi?: Maybe<Scalars['Float']['output']>;
  /** Direct normal solar irradiance (W/m^2) */
  dni?: Maybe<Scalars['Float']['output']>;
  /** Solar hour angle (Degrees) */
  h_angle?: Maybe<Scalars['Float']['output']>;
  /** Solar elevation angle (Degrees) */
  elev_angle?: Maybe<Scalars['Float']['output']>;
  /** Azimuth angle (Degrees) */
  azimuth?: Maybe<Scalars['Float']['output']>;
  /** Visibility (KM) */
  vis?: Maybe<Scalars['Float']['output']>;
  /** Part of the day (d = day, n = night) */
  pod?: Maybe<Scalars['String']['output']>;
  weather?: Maybe<query_history_hourly_data_items_weather>;
  /** Cloud Cover 0-100 (%) */
  clouds?: Maybe<Scalars['Int']['output']>;
  /** Liquid equivalent precipitation - Default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Snowfall - Default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
};

export type query_history_hourly_data_items_weather = {
  /** Icon code for forecast image display */
  icon?: Maybe<Scalars['String']['output']>;
  /** Weather Condition code */
  code?: Maybe<Scalars['Int']['output']>;
  /** Weather Condition description */
  description?: Maybe<Scalars['String']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_history_hourly_units =
  | 'S'
  | 'I';

/** Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> */
export type queryInput_history_hourly_lang =
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'de'
  | 'fi'
  | 'fr'
  | 'el'
  | 'es'
  | 'et'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'is'
  | 'kw'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'zh'
  | 'zh_tw';

/** Assume utc (default) or local time for start_date, end_date */
export type queryInput_history_hourly_tz =
  | 'local'
  | 'utc';

export type HistorySubhourly = {
  /** City name (Closest) */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** List of data sources used in response */
  sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  data?: Maybe<Array<Maybe<HistoryObj>>>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_history_subhourly_units =
  | 'S'
  | 'I';

/** Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a> */
export type queryInput_history_subhourly_lang =
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'de'
  | 'fi'
  | 'fr'
  | 'el'
  | 'es'
  | 'et'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'is'
  | 'kw'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'tr'
  | 'uk'
  | 'zh'
  | 'zh_tw';

/** Assume utc (default) or local time for start_date, end_date */
export type queryInput_history_subhourly_tz =
  | 'local'
  | 'utc';

export type EnergyObsGroupForecast = {
  /** City name (closest) */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Degree day threshold units */
  threshold_units?: Maybe<Scalars['String']['output']>;
  /** Degree day threshold */
  threshold_value?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<EnergyObsSeries>>>;
};

export type EnergyObsSeries = {
  /** Date */
  date?: Maybe<Scalars['Date']['output']>;
  /** Cooling degree days */
  cdd?: Maybe<Scalars['Float']['output']>;
  /** Heating degree days */
  hdd?: Maybe<Scalars['Float']['output']>;
  /** Average Relative humidity (%) */
  rh?: Maybe<Scalars['Int']['output']>;
  /** Average dew point temperature - Default (C) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Average wind direction (Degrees) */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Average wind speed - Default (m/s) */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Average temperature - Default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Average cloud cover (%) */
  clouds?: Maybe<Scalars['Int']['output']>;
  /** Total global horizontal solar irradiance (W/m^2) */
  t_ghi?: Maybe<Scalars['Float']['output']>;
  /** Total diffuse horizontal solar irradiance (W/m^2) */
  t_dhi?: Maybe<Scalars['Float']['output']>;
  /** Total direct normal solar irradiance (W/m^2) */
  t_dni?: Maybe<Scalars['Float']['output']>;
  /** Average number of daily sun hours - # hours where Solar GHI > 1000 W/m^2 */
  sun_hours?: Maybe<Scalars['Float']['output']>;
  /** Total precipitation in period - Default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Total snowfall in period - Default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
};

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_forecast_energy_units =
  | 'S'
  | 'I';

/** Time period (default: daily) */
export type queryInput_forecast_energy_tp =
  | 'hourly'
  | 'daily';

export type EnergyObsGroup = {
  /** Count of found observations */
  count?: Maybe<Scalars['Int']['output']>;
  /** Start Date */
  start_date?: Maybe<Scalars['Int']['output']>;
  /** End Date */
  end_date?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<EnergyObs>>>;
};

export type EnergyObs = {
  /** City name (closest) */
  city_name?: Maybe<Scalars['String']['output']>;
  /** State abbreviation */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Country abbreviation */
  country_code?: Maybe<Scalars['String']['output']>;
  /** Local IANA time zone */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Nearest Station ID [DEPRECATED] */
  station_id?: Maybe<Scalars['String']['output']>;
  /** List of data sources used in response */
  sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Cooling degree days */
  cdd?: Maybe<Scalars['Float']['output']>;
  /** Heating degree days */
  hdd?: Maybe<Scalars['Float']['output']>;
  /** Average Relative humidity (%) */
  rh?: Maybe<Scalars['Int']['output']>;
  /** Average dew point temperature - Default (C) */
  dewpt?: Maybe<Scalars['Float']['output']>;
  /** Average wind direction (Degrees) */
  wind_dir?: Maybe<Scalars['Int']['output']>;
  /** Average wind speed - Default (m/s) */
  wind_spd?: Maybe<Scalars['Float']['output']>;
  /** Average temperature - Default (C) */
  temp?: Maybe<Scalars['Float']['output']>;
  /** Average cloud cover (%) */
  clouds?: Maybe<Scalars['Int']['output']>;
  /** Total global horizontal solar irradiance (W/m^2) */
  t_ghi?: Maybe<Scalars['Float']['output']>;
  /** Total diffuse horizontal solar irradiance (W/m^2) */
  t_dhi?: Maybe<Scalars['Float']['output']>;
  /** Total direct normal solar irradiance (W/m^2) */
  t_dni?: Maybe<Scalars['Float']['output']>;
  /** Average number of daily sun hours - # hours where Solar GHI > 1000 W/m^2 */
  sun_hours?: Maybe<Scalars['Float']['output']>;
  /** Total precipitation in period - Default (mm) */
  precip?: Maybe<Scalars['Float']['output']>;
  /** Total snowfall in period - Default (mm) */
  snow?: Maybe<Scalars['Float']['output']>;
};

/** Time period to aggregate by (daily, monthly) */
export type queryInput_history_energy_tp =
  | 'hourly'
  | 'daily'
  | 'monthly';

/** Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> */
export type queryInput_history_energy_units =
  | 'S'
  | 'I';

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

  export type QuerySdk = {
      /** Returns severe weather alerts issued by meteorological agencies - given a lat, and a lon. **/
  alerts: InContextSdkMethod<Query['alerts'], QueryalertsArgs, MeshContext>,
  /** Returns a Current Observation - given a lat, and a lon. **/
  current: InContextSdkMethod<Query['current'], QuerycurrentArgs, MeshContext>,
  /** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC. 
 **/
  forecast_daily: InContextSdkMethod<Query['forecast_daily'], Queryforecast_dailyArgs, MeshContext>,
  /** Returns a 60 minute precipitation forecast, where each point represents one minute (1 min) period. **/
  forecast_minutely: InContextSdkMethod<Query['forecast_minutely'], Queryforecast_minutelyArgs, MeshContext>,
  /** Returns 72 hour (hourly) Air Quality forecast, where each point represents a one hour period. **/
  forecast_airquality: InContextSdkMethod<Query['forecast_airquality'], Queryforecast_airqualityArgs, MeshContext>,
  /** Returns historical air quality conditions. See https://www.weatherbit.io/api for API specific rate limits. **/
  history_airquality: InContextSdkMethod<Query['history_airquality'], Queryhistory_airqualityArgs, MeshContext>,
  /** Returns current air quality conditions. **/
  current_airquality: InContextSdkMethod<Query['current_airquality'], Querycurrent_airqualityArgs, MeshContext>,
  /** Returns an hourly forecast, where each point represents a one hour period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC. 
 **/
  forecast_hourly: InContextSdkMethod<Query['forecast_hourly'], Queryforecast_hourlyArgs, MeshContext>,
  /** Returns Agweather Forecast  - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. **/
  forecast_agweather: InContextSdkMethod<Query['forecast_agweather'], Queryforecast_agweatherArgs, MeshContext>,
  /** Returns Historical Agweather Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. **/
  history_agweather: InContextSdkMethod<Query['history_agweather'], Queryhistory_agweatherArgs, MeshContext>,
  /** Returns Historical Climate Normals (Averages) - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. **/
  normals: InContextSdkMethod<Query['normals'], QuerynormalsArgs, MeshContext>,
  /** Returns Historical Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. **/
  history_daily: InContextSdkMethod<Query['history_daily'], Queryhistory_dailyArgs, MeshContext>,
  /** Returns Historical Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. **/
  history_hourly: InContextSdkMethod<Query['history_hourly'], Queryhistory_hourlyArgs, MeshContext>,
  /** Returns Historical Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits. **/
  history_subhourly: InContextSdkMethod<Query['history_subhourly'], Queryhistory_subhourlyArgs, MeshContext>,
  /** Retrieve an 8 day forecast relevant to te Energy Sector (degree days, solar radiation, precipitation, wind). **/
  forecast_energy: InContextSdkMethod<Query['forecast_energy'], Queryforecast_energyArgs, MeshContext>,
  /** Returns aggregate energy specific historical weather fields, over a specified time period. See https://www.weatherbit.io/api for API specific rate limits. **/
  history_energy: InContextSdkMethod<Query['history_energy'], Queryhistory_energyArgs, MeshContext>,
  /** Downloads bulk data files - OPTIONS: ( current.csv.gz, forecast_hourly.csv.gz, forecast_daily.csv.gz). Units are Metric (Celcius, m/s, etc). **/
  bulk_files: InContextSdkMethod<Query['bulk_files'], Querybulk_filesArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Weather"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
