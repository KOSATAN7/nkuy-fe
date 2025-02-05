import { useEffect, useState } from "react";
import CustomButton from "@/components/Button/CustomButton";
import SelectField from "@/components/Field/SelectField";
import TextField from "@/components/Field/TextField";
import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import {
  getCabangOlahraga,
  getLigaByKaterogi,
  getNegaraByKategori,
  getPertandinganbyId,
  getTimByliga,
  postPertandingan,
  putPertandingan,
} from "@/service/index";
import { useNavigate, useParams } from "react-router-dom";
import SweetAlert from "@/components/Alert/swal";

const UpdatePertandingan = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [sportsOptions, setSportsOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [countriesOptions, setCountriesOptions] = useState<
    { value: string; label: string; flag?: string }[]
  >([]);

  const [leaguesOptions, setLeaguesOptions] = useState<
    { value: string; label: string; flag?: string }[]
  >([]);
  const [teamsOptions, setTeamsOptions] = useState<
    { value: string; label: string; logo?: string }[]
  >([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");
  const [selectedTeam1, setSelectedTeam1] = useState("");
  const [selectedTeam2, setSelectedTeam2] = useState("");
  const [matchDate, setMatchDate] = useState("");
  const [matchTime, setMatchTime] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<{
    show: boolean;
    message: string;
  }>({ show: false, message: "" });

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) throw new Error("Anda harus login!");

        const response = await getPertandinganbyId(Number(id), token);
        if (response.data.success) {
          const data = response.data.data;

          setSelectedCategory(data.cabang_olahraga);
          setSelectedLeague(data.liga);
          setSelectedTeam1(data.tim_tuan_rumah);
          setSelectedTeam2(data.tim_tamu);
          setMatchDate(data.tanggal_pertandingan);
          setMatchTime(data.waktu_pertandingan);
        }
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    };

    if (id) {
      fetchMatchData();
    }
  }, [id]);

  useEffect(() => {
    setTitle("Ubah Pertandingan");
    setButtonLabel("Kembali");
    setButtonLink("/pertandingan");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  useEffect(() => {
    const fetchSportsCategories = async () => {
      try {
        const response = await getCabangOlahraga();
        if (response.data.success) {
          setSportsOptions(
            Object.entries(response.data.data).map(([key, value]) => ({
              value: key,
              label: String(value),
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching sports categories:", error);
      }
    };

    fetchSportsCategories();
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;

    const fetchCountries = async () => {
      try {
        const response = await getNegaraByKategori(selectedCategory);
        if (response.data.success) {
          setCountriesOptions(
            response.data.data
              .filter((country: { code: any }) => country.code)
              .map(
                (country: { code: string; name: string; flag?: string }) => ({
                  value: country.code,
                  label: country.name,
                  flag: country.flag,
                })
              )
          );
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, [selectedCategory]);

  useEffect(() => {
    if (!selectedCategory || !selectedCountry) return;

    const fetchLeagues = async () => {
      try {
        const response = await getLigaByKaterogi(
          selectedCategory,
          selectedCountry
        );
        if (response.data.success) {
          setLeaguesOptions(
            response.data.data.map(
              (league: {
                logo: any;
                league_id: { toString: () => any };
                name: any;
              }) => ({
                value: league.league_id.toString(),
                label: league.name,
                flag: league.logo,
              })
            )
          );
        }
      } catch (error) {
        console.error("Error fetching leagues:", error);
      }
    };

    fetchLeagues();
  }, [selectedCategory, selectedCountry]);

  useEffect(() => {
    if (!selectedCategory || !selectedLeague) return;

    const fetchTeams = async () => {
      try {
        const response = await getTimByliga(selectedCategory, selectedLeague);
        if (response.data.success) {
          setTeamsOptions(
            response.data.data.map(
              (teamData: {
                team: {
                  logo: any;
                  name: any;
                };
              }) => ({
                value: teamData.team.name,
                label: teamData.team.name,
                logo: teamData.team.logo,
              })
            )
          );
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams();
  }, [selectedCategory, selectedLeague]);

  const selectedCountryData = countriesOptions.find(
    (country) => country.value === selectedCountry
  );

  const selectedLeagueData = leaguesOptions.find(
    (leagues) => leagues.value === selectedLeague
  );

  const selectedTeam1Data = teamsOptions.find(
    (team) => team.value === selectedTeam1
  );

  const selectedTeam2Data = teamsOptions.find(
    (team) => team.value === selectedTeam2
  );

  const handleSubmit = async () => {
    if (
      !selectedCategory ||
      !selectedLeague ||
      !selectedTeam1 ||
      !selectedTeam2 ||
      !matchDate ||
      !matchTime
    ) {
      alert("Semua field harus diisi!");
      return;
    }

    const payload = {
      cabang_olahraga: selectedCategory,
      liga: selectedLeagueData?.label || "",
      tim_tuan_rumah: selectedTeam1Data?.label || "",
      logo_tuan_rumah: selectedTeam1Data?.logo || "",
      tim_tamu: selectedTeam2Data?.label || "",
      logo_tamu: selectedTeam2Data?.logo || "",
      tanggal_pertandingan: matchDate,
      waktu_pertandingan: matchTime,
    };

    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Login Goblogggg!!!!");
      }
      await putPertandingan(Number(id), payload, token);
      setShowSuccessAlert(true);
    } catch (error: any) {
      console.error("Error Menambah Data Pertandingan :", error);
      setErrorAlert({
        show: true,
        message:
          error.response?.data?.message || "Error Menambah Data Pertandingan",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessAlertConfirm = () => {
    setShowSuccessAlert(false);
    navigate(-1);
  };

  const handleErrorAlertConfirm = () => {
    setErrorAlert({ show: false, message: "" });
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5">Data Pertandingan</h1>
      <div className="flex space-x-10">
        <div className="space-y-3">
          <SelectField
            options={sportsOptions}
            title="Nama Cabang Olahraga"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedCountry("");
              setSelectedLeague("");
              setLeaguesOptions([]);
              setTeamsOptions([]);
            }}
          />
          <div className="flex items-center space-x-5">
            <SelectField
              options={countriesOptions}
              title="Negara"
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedLeague("");
                setLeaguesOptions([]);
                setTeamsOptions([]);
              }}
            />
            {selectedCountryData?.flag && (
              <div className="mt-8 flex items-center space-x-2">
                <img
                  src={selectedCountryData.flag}
                  alt="Flag"
                  className="w-10 h-10"
                />
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <SelectField
              options={leaguesOptions}
              title="Liga"
              value={selectedLeague}
              onChange={(e) => {
                setSelectedLeague(e.target.value);
                setTeamsOptions([]);
              }}
            />
            {selectedLeagueData?.flag && (
              <div className="mt-8 flex items-center space-x-2">
                <img
                  src={selectedLeagueData.flag}
                  alt="Flag"
                  className="w-10 h-10"
                />
              </div>
            )}
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-2">
              {selectedTeam1Data?.logo && (
                <div className="mt-8 flex items-center space-x-2">
                  <img
                    src={selectedTeam1Data.logo}
                    alt="Logo Tim 1"
                    className="w-20"
                  />
                </div>
              )}
              <SelectField
                options={teamsOptions}
                value={selectedTeam1}
                title="Tim 1"
                onChange={(e) => setSelectedTeam1(e.target.value)}
              />
            </div>

            <span className="mt-8">VS</span>

            <div className="flex items-center space-x-2">
              <SelectField
                options={teamsOptions}
                value={selectedTeam2}
                title="Tim 2"
                onChange={(e) => setSelectedTeam2(e.target.value)}
              />
              {selectedTeam2Data?.logo && (
                <div className="mt-8 flex items-center space-x-2">
                  <img
                    src={selectedTeam2Data.logo}
                    alt="Logo Tim 2"
                    className="w-20"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <TextField
            type="date"
            title="Tanggal"
            value={matchDate}
            onChange={(e) => setMatchDate(e.target.value)}
          />
          <TextField
            type="time"
            value={matchTime}
            title="Waktu"
            onChange={(e) => setMatchTime(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <CustomButton
          label={loading ? "Menyimpan..." : "Ubah Data"}
          onClick={handleSubmit}
        />
      </div>
      <SweetAlert
        show={showSuccessAlert}
        title="Success"
        text="Berhasil Menambah Data Pertandingan"
        type="success"
        confirmButtonText="OK"
        onConfirm={handleSuccessAlertConfirm}
      />
      <SweetAlert
        show={errorAlert.show}
        title="Error"
        text={errorAlert.message}
        type="error"
        confirmButtonText="OK"
        onConfirm={handleErrorAlertConfirm}
      />
    </div>
  );
};

export default UpdatePertandingan;
