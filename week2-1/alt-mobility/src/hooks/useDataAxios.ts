/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Datas, VehicleFuelType, VehicleSegment } from '../types';
import carAPI from '../utils/api';

type GetDataValues = {
  fuelType?: VehicleFuelType;
  segment?: VehicleSegment | '';
};

type ResponseValues = {
	data:{ payload: Datas[] };
	status: number;
}

function useDataAxios() {
	const [isLoading, setIsLoading] = useState(false);
	const [values, setValues] = useState<Datas[]>([]);
	const navigate = useNavigate();

	const getValues = async () => {
		setIsLoading(true);
		const {data: { payload }, status}: ResponseValues = await carAPI.getCars();

		if (status >= 200 && status < 300) {
			setValues(payload);
			setIsLoading(false);
		} else {
			navigate('/error', { state: { status } });
      setIsLoading(false);
		}
	};

	// Axios의 통신에 params 관해서 상태관리 로직
	const getValue = async (params: GetDataValues = {}) => {
		setIsLoading(true);
		const {data: { payload }, status}: ResponseValues = await carAPI.getCar(params.segment);

		if (status >= 200 && status < 300) {
			setValues(payload);
			setIsLoading(false);
		} else {
			navigate('/error', { state: { status } });
      setIsLoading(false);
		}
	};

	return { isLoading, values, getValues }
}

export default useDataAxios;