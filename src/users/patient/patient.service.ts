import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Patients } from 'src/entities/Patients.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchUserByCiDto } from '../dto/search-user-by.dto';
import { PatientInfoDto } from './dto/patirnt-info.dto';
import { ReservAppointmentDto } from './dto/reserv-appointment';

@Injectable()
export class PatientService {
    constructor(
        private databaseService: DatabaseService,
        @InjectRepository(Patients)
        private readonly patientsRepository: Repository<Patients>
    ) {}

    async getAllPatients(): Promise<{message: string, patients: Patients[]}> {
        const patients = await this.patientsRepository.find();
        return {
            message: 'Patients found successfully',
            patients: patients
        };
    }
    async getPatientByCi(searchUserByCiDto: SearchUserByCiDto): Promise<{message: string, patient: any}> {
        const patient = await this.databaseService.executeStoredProcedure<Patients>('GetPatientDetails', [
            searchUserByCiDto.userCi
        ]);
        return {
            message: 'Patient found successfully',
            patient: patient
        };
    }
    async getPatientInfoByCi(searchUserByCiDto: SearchUserByCiDto): Promise<{message: string, patientInfo: PatientInfoDto }> {
        const patientInfo = await this.databaseService.executeStoredProcedure<PatientInfoDto>('GetPatientDetailsWithAddress', [
            searchUserByCiDto.userCi
        ]);
        console.log('Patient Info:', patientInfo);
        const patientInfoData = patientInfo[0] as PatientInfoDto;
        if (patientInfoData){
            if(patientInfoData.Detalles === null || patientInfoData.Detalles === undefined) {
                patientInfoData.Detalles = 'Sin Detalles';
            }
            console.log('Patient Info Data:', patientInfoData);
        }
        return {
            message: 'Patient info found successfully',
            patientInfo: patientInfoData
        };
    }
    async getPatientAppointmentsByCi(searchUserByCiDto: SearchUserByCiDto): Promise<{message: string, appointments: any}> {
        const appointments = await this.databaseService.executeStoredProcedure<any[]>('GetPatientAppointments', [
            searchUserByCiDto.userCi
        ]);
        return {
            message: 'Patient appointments found successfully',
            appointments: appointments
        };
    }
    async reservAppointment(appointmentData: ReservAppointmentDto):Promise<any>{
        const formattedDate = new Date(appointmentData.date);
        appointmentData.date = formattedDate.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
        appointmentData.department = appointmentData.department.toLowerCase();
        console.log('Formatted Date:', appointmentData);
        const reservAppointment = await this.databaseService.executeStoredProcedure('CreateAppointment', [
            appointmentData.patientCi,
            appointmentData.doctorCi,
            appointmentData.specialty,
            appointmentData.date,
            appointmentData.institutionName,
            appointmentData.department,
            appointmentData.shift,
            appointmentData.startTime
        ]);
        return reservAppointment;
    }
}
