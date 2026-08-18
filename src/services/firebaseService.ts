import { ReferralCase, StudentNEAE } from '../types';

const FIREBASE_BASE_URL = 'https://avengers-6a-cbbcc-default-rtdb.europe-west1.firebasedatabase.app/edubuenaventura';

export const FirebaseService = {
  // 1. Obtener todos los expedientes
  async getCases(): Promise<ReferralCase[]> {
    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/cases.json`);
      if (!response.ok) throw new Error('Error al conectar con Firebase');
      const data = await response.json();
      if (!data) return [];
      
      // Convert map object to array
      if (typeof data === 'object') {
        return Object.values(data);
      }
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.warn('Firebase offline o error de red, usando fallback local:', error);
      return [];
    }
  },

  // 2. Guardar o actualizar un expediente
  async saveCase(referralCase: ReferralCase): Promise<boolean> {
    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/cases/${referralCase.id}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(referralCase)
      });
      return response.ok;
    } catch (error) {
      console.error('Error al guardar caso en Firebase:', error);
      return false;
    }
  },

  // 3. Obtener alumnos NEAE
  async getNeaeStudents(): Promise<StudentNEAE[]> {
    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/neae.json`);
      if (!response.ok) throw new Error('Error al conectar con Firebase NEAE');
      const data = await response.json();
      if (!data) return [];
      
      if (typeof data === 'object') {
        return Object.values(data);
      }
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.warn('Firebase offline para NEAE:', error);
      return [];
    }
  },

  // 4. Guardar alumno NEAE
  async saveNeaeStudent(student: StudentNEAE): Promise<boolean> {
    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/neae/${student.id}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
      });
      return response.ok;
    } catch (error) {
      console.error('Error al guardar NEAE en Firebase:', error);
      return false;
    }
  }
};
